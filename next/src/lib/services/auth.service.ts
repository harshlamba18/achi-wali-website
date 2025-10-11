import { Types } from "mongoose";
import userRepository from "@/lib/database/repos/user.repo";
import signUpRequestRepository from "@/lib/database/repos/signUpRequest.repo";
import { generateJWToken, validateJWToken } from "@/lib/services/core/jwt.core.service";
import { hashString, verifyStringAndHash } from "@/lib/services/core/hash.core.service";
import { generateOTP } from "@/lib/services/core/otp.core.service";
import { sendOTPEmail } from "@/lib/services/core/email.core.service";
import {
    ISession,
    SECs,
    ESECs,
    ServiceSignature,
    EUserRole,
} from "@/lib/types/index.types";
import { SESSION_COOKIE_NAME } from "@/lib/config/constants";
import AppError from "../utils/error";


const me: ServiceSignature<object, SECs.Auth.Me, true
> = async (session, _) => {
    const user = await userRepository.findById(new Types.ObjectId(session.userId));

    if (!user) {
        throw new AppError("Session exists, but user not found.", { session });
    }

    return {
        success: true,
        data: {
            ...user,
            _id: user._id.toHexString(),
            passwordHash: undefined,
            teamId: user.teamId?.toString() ?? null,
        },
    };
};

const signIn: ServiceSignature<
    {
        email: string,
        password: string,
    },
    SECs.Auth.SignIn
> = async (data) => {
    const user = await userRepository.findByEmail(data.email);

    if (!user) {
        return {
            success: false,
            errorCode: ESECs.USER_NOT_FOUND,
            errorMessage: "No account found with this email.",
        };
    }

    const isValid = await verifyStringAndHash(
        data.password,
        user.passwordHash
    );

    if (!isValid) {
        return {
            success: false,
            errorCode: ESECs.INVALID_CREDENTIALS,
            errorMessage: "The password you provided is incorrect.",
        };
    }

    const token = await generateJWToken({
        _id: user._id.toString(),
    });

    return {
        success: true,
        data: {
            token,
        },
    };
};

const signOut: ServiceSignature<
    object,
    SECs.Auth.SignOut,
    true
> = async (_, __) => {
    return {
        success: true,
        data: {
            token: "INVALID_TOKEN",
        },
    };
};

const signUpRequest: ServiceSignature<
    {
        name: string,
        email: string,
        password: string,
    },
    SECs.Auth.SignUpRequest
> = async (data) => {
    const user = await userRepository.findByEmail(data.email);
    if (user) {
        return {
            success: false,
            errorCode: ESECs.EMAIL_TAKEN,
            errorMessage: "An account with this email already exists.",
        };
    }

    const otp = generateOTP();

    const passwordHash = await hashString(data.password);
    const otpHash = await hashString(otp);

    const signUpRequestDoc = {
        name: data.name,
        email: data.email,
        passwordHash,
        otpHash,
        expiresAt: new Date(Date.now() + 600 * 1000)
    };

    const prevAttempt = await signUpRequestRepository.findByEmail(data.email);
    if (prevAttempt) {
        await signUpRequestRepository.updateById(
            prevAttempt._id,
            signUpRequestDoc
        );
    }
    else {
        await signUpRequestRepository.insert(signUpRequestDoc);
    }

    sendOTPEmail(data.email, otp);

    return {
        success: true,
        data: {},
    };
}

const signUpRequestResendOTP: ServiceSignature<
    {
        email: string,
    },
    SECs.Auth.SignUpRequestResendOTP
> = async (data) => {
    const prevRequest = await signUpRequestRepository.findByEmail(data.email);
    if (!prevRequest) {
        return {
            success: false,
            errorCode: ESECs.SIGNUP_REQUEST_NOT_FOUND,
            errorMessage: "No pending sign-up request found for this email.",
        };
    }

    const resendBlockedTill = prevRequest.updatedAt.getTime() + 60 * 1000;

    if (Date.now() < resendBlockedTill) {
        return {
            success: false,
            errorCode: ESECs.TOO_MANY_REQUESTS,
            errorMessage: "Please wait a moment before requesting a new code.",
        };
    }

    const otp = generateOTP();
    const otpHash = await hashString(otp);

    const expiresAt = new Date(
        Date.now() + 10 * 60 * 1000
    );

    await signUpRequestRepository.updateById(prevRequest._id, {
        otpHash,
        expiresAt,
    });

    sendOTPEmail(data.email, otp);

    return {
        success: true,
        data: {},
    };
};

const signUpVerify: ServiceSignature<
    {
        email: string,
        otp: string,
    },
    SECs.Auth.SignUpVerify
> = async (data) => {
    const request = await signUpRequestRepository.findByEmail(data.email);
    if (!request) {
        return {
            success: false,
            errorCode: ESECs.SIGNUP_REQUEST_NOT_FOUND,
            errorMessage: "No pending sign-up request found.",
        };
    }

    const isOTPExpired = request.expiresAt.getTime() < Date.now();
    const isOTPValid = await verifyStringAndHash(data.otp, request.otpHash);

    if (isOTPExpired || !isOTPValid) {
        return {
            success: false,
            errorCode: ESECs.INVALID_OTP,
            errorMessage: "Invalid or expired verification code.",
        };
    }

    await userRepository.insert({
        name: request.name,
        email: request.email,
        passwordHash: request.passwordHash,
        roles: [EUserRole.GUEST],
    });

    await signUpRequestRepository.removeById(request._id);

    return {
        success: true,
        data: {},
    };
};

const changePassword: ServiceSignature<
    {
        password: string,
        newPassword: string,
    },
    SECs.Auth.ChangePassword,
    true
> = async (session, data) => {
    const user = await userRepository.findById(session.userId);
    if (!user) {
        throw new AppError("Session exists, but user not found.", { session });
    }

    const isCurrentPasswordValid = await verifyStringAndHash(
        data.password,
        user.passwordHash
    );

    if (!isCurrentPasswordValid) {
        return {
            success: false,
            errorCode: ESECs.INVALID_CREDENTIALS,
            errorMessage: "The password you provided is incorrect.",
        };
    }

    const newPasswordHash = await hashString(data.newPassword);

    await userRepository.updateById(session.userId, {
        passwordHash: newPasswordHash,
    });

    return {
        success: true,
        data: {},
    };
};

const extractSession = async (request: Request): Promise<ISession | null> => {
    const cookieHeader = request.headers.get('cookie') ?? '';
    const cookieMap = Object.fromEntries(
        cookieHeader
            .split(';')
            .map(c => c.trim().split('='))
            .filter(([k, v]) => k && v)
    );

    const token = cookieMap[SESSION_COOKIE_NAME];
    if (!token) {
        return null;
    }

    const payload = await validateJWToken(token);
    if (!payload) {
        return null;
    }

    if (typeof payload._id !== 'string' || !Types.ObjectId.isValid(payload._id)) {
        return null;
    }

    const user = await userRepository.findById(new Types.ObjectId(payload._id));
    if (!user) {
        return null;
    }

    return {
        userId: user._id,
        userEmail: user.email,
        userRoles: user.roles,
    };
}

const authServices = {
    me,
    signIn,
    signOut,
    signUpRequest,
    signUpRequestResendOTP,
    signUpVerify,
    changePassword,
    extractSession,
}


export default authServices

