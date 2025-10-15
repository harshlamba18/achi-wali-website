import { EmptyObject, EUserRole } from "./index.types";

export namespace IbD {
    export namespace Misc {
        export type Health = EmptyObject;
    }

    export namespace Auth {
        export type Me = EmptyObject;

        export type SignIn = {
            email: string;
            password: string;
        };

        export type SignOut = EmptyObject;

        export type SignUpRequest = {
            name: string;
            email: string;
            password: string;
        };

        export type SignUpRequestResendOTP = {
            email: string;
        };

        export type SignUpVerify = {
            email: string;
            otp: string;
        };

        export type ChangePassword = {
            password: string;
            newPassword: string;
        };
    }

    export namespace Team {
        export type Get = {
            _id: string;
        };

        export type GetAll = EmptyObject;

        export type Create = {
            name: string;
            description: string;
        };

        export type Update = {
            _id: string;
            name?: string;
            description?: string;
            coverImageMediaKey?: string;
        };

        export type AddMembers = {
            _id: string;
            memberIds: string[];
        };

        export type Remove = {
            _id: string;
        };
    }

    export namespace User {
        export type Get = {
            _id: string;
        };

        export type GetUnrestricted = {
            _id: string;
        };

        export type GetAll = EmptyObject;

        export type Update = {
            name?: string;
            profileImgMediaKey?: string;
            phoneNumber?: string;
            links?: {
                label: string;
                url: string;
            }[];
        };

        export type UpdateRoles = {
            _id: string;
            roles: EUserRole[];
        };

        export type Remove = {
            _id: string;
        };
    }
}


