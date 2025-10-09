import { z } from "zod"
import { allIbDField } from "./core.validator";

const authValidator = {
    me: z.object({}),
    signIn: z.object({
        email: allIbDField.email,
        password: allIbDField.password,
    }),
    signOut: z.object({}),
    signUpRequest: z.object({
        name: allIbDField.shortString,
        email: allIbDField.email,
        password: allIbDField.password,
    }),
    signUpRequestResendOTP: z.object({
        email: allIbDField.email,
    }),
    signUpVerify: z.object({
        email: allIbDField.email,
        otp: allIbDField.otp,
    }),
    changePassword: z.object({
        password: allIbDField.password,
        newPassword: allIbDField.password,
    }),
}

export default authValidator;
