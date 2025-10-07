import userRepository from "@/lib/database/repos/user.repo";
import teamRepository from "@/lib/database/repos/team.repo";
import {
    ISession,
    SECs,
    ESECs,
    ServiceSignature,
    EUserRole,
    IUser,
} from "@/lib/types/index.types";
import { Types } from "mongoose";
import { withSession } from "../database/db";


namespace __internal__ {
    export const userExportLimitedInfo = (user: IUser) => {
        return {
            _id: user._id.toHexString(),
            name: user.name,
            email: user.email,
            profileImgMediaKey: user.profileImgMediaKey,
            roles: user.roles,
            teamId: user.teamId?.toHexString() ?? null,
            links: user.links,
            createAt: user.createdAt,
        }
    }

    export const userExportUnrestrictedInfo = (user: IUser) => {
        return {
            _id: user._id.toHexString(),
            name: user.name,
            email: user.email,
            profileImgMediaKey: user.profileImgMediaKey,
            phoneNumber: user.phoneNumber,
            roles: user.roles,
            teamId: user.teamId?.toHexString() ?? null,
            links: user.links,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    }
}


const get: ServiceSignature<{
    _id: Types.ObjectId,
}, SECs.User.Get, false
> = async (data) => {
    const user = await userRepository.findById(new Types.ObjectId(data._id));

    if (!user) {
        return {
            success: false,
            errorCode: ESECs.USER_NOT_FOUND,
            errorMessage: "User not found.",
        };
    }

    return {
        success: true,
        data: __internal__.userExportLimitedInfo(user)
    };
};

const getUnrestricted: ServiceSignature<{
    _id: Types.ObjectId,
}, SECs.User.Get, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only admin can see all info about users."
        }
    }

    const user = await userRepository.findById(new Types.ObjectId(data._id));

    if (!user) {
        return {
            success: false,
            errorCode: ESECs.USER_NOT_FOUND,
            errorMessage: "User not found.",
        };
    }

    return {
        success: true,
        data: __internal__.userExportUnrestrictedInfo(user)
    };
};

const getAll: ServiceSignature<{}, SECs.User.GetAll, false
> = async (_) => {
    const users = await userRepository.findAll({});

    return {
        success: true,
        data: users.map(user => __internal__.userExportLimitedInfo(user)),
    };
};

const update: ServiceSignature<{
    name?: string,
    profileImgMediaKey?: string | null,
    phoneNumber?: string,
    links?: {
        label: string,
        url: string,
    }[],
}, SECs.User.Update, true
> = async (session, data) => {
    const user = await userRepository.findById(session.userId);
    if (!user) {
        return {
            success: false,
            errorCode: ESECs.USER_NOT_FOUND,
            errorMessage: "User not found.",
        };
    }

    await userRepository.updateById(session.userId, { ...data });

    return {
        success: true,
        data: {},
    };
};

const updateRoles: ServiceSignature<{
    _id: Types.ObjectId,
    roles: EUserRole[],
}, SECs.User.UpdateRoles, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only Admin can modify user roles.",
        };
    }

    const user = await userRepository.findById(data._id);
    if (!user) {
        return {
            success: false,
            errorCode: ESECs.USER_NOT_FOUND,
            errorMessage: "User not found.",
        };
    }

    await userRepository.updateById(data._id, {
        roles: data.roles,
    });

    return {
        success: true,
        data: {},
    };
};

const remove: ServiceSignature<{
    _id: Types.ObjectId,
}, SECs.User.Remove, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only admin can remove a user."
        }
    }

    const user = await userRepository.findById(data._id);
    if (!user) {
        return {
            success: false,
            errorCode: ESECs.USER_NOT_FOUND,
            errorMessage: "User not found.",
        };
    }

    await withSession(async (dbSession) => {
        if (user.teamId) {
            await teamRepository.updateById(
                user.teamId,
                {
                    $pull: {
                        memberIds: data._id
                    }
                },
                dbSession
            );
        }

        await userRepository.removeById(data._id, dbSession);
    });

    return {
        success: true,
        data: {},
    };
};

const userService = {
    get,
    getUnrestricted,
    getAll,
    update,
    updateRoles,
    remove,
};

export default userService;