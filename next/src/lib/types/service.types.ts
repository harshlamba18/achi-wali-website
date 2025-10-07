export enum ESECs {
    USER_NOT_FOUND,
    SIGNUP_REQUEST_NOT_FOUND,
    EMAIL_TAKEN,

    INVALID_CREDENTIALS,
    INVALID_JWT,
    INVALID_OTP,

    TOO_MANY_REQUESTS,
    FORBIDDEN,

    TEAM_NOT_FOUND,
    TEAM_NAME_TAKEN,
    NOT_TEAM_MEMBER,
}

export namespace SECs {
    export namespace Misc {
        export type Health = never;
    }

    export namespace Auth {
        export type Me = never;

        export type SignIn =
            | ESECs.USER_NOT_FOUND
            | ESECs.INVALID_CREDENTIALS;

        export type SignOut = never;

        export type SignUpRequest =
            | ESECs.EMAIL_TAKEN;

        export type SignUpRequestResendOTP =
            | ESECs.SIGNUP_REQUEST_NOT_FOUND
            | ESECs.TOO_MANY_REQUESTS;

        export type SignUpVerify =
            | ESECs.SIGNUP_REQUEST_NOT_FOUND
            | ESECs.INVALID_OTP;

        export type ChangePassword =
            | ESECs.INVALID_CREDENTIALS;

        export type ExtractSession =
            | ESECs.INVALID_JWT;
    }

    export namespace Team {
        export type Get =
            | ESECs.TEAM_NOT_FOUND;

        export type GetAll = never;

        export type Create =
            | ESECs.TEAM_NAME_TAKEN
            | ESECs.FORBIDDEN;

        export type Update =
            | ESECs.TEAM_NOT_FOUND
            | ESECs.TEAM_NAME_TAKEN
            | ESECs.FORBIDDEN;

        export type AddMembers =
            | ESECs.TEAM_NOT_FOUND
            | ESECs.USER_NOT_FOUND
            | ESECs.FORBIDDEN;

        export type Remove =
            | ESECs.TEAM_NOT_FOUND
            | ESECs.FORBIDDEN;
    }

    export namespace User {
        export type Get =
            | ESECs.USER_NOT_FOUND
            | ESECs.FORBIDDEN;

        export type GetAll =
            | ESECs.FORBIDDEN;

        export type Update =
            | ESECs.USER_NOT_FOUND
            | ESECs.FORBIDDEN;

        export type UpdateRoles =
            | ESECs.USER_NOT_FOUND
            | ESECs.FORBIDDEN;

        export type Remove =
            | ESECs.USER_NOT_FOUND
            | ESECs.FORBIDDEN;
    }

}
