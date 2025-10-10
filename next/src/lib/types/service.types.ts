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

// Misc
export type MiscHealth = never;

// Auth
export type AuthMe = never;

export type AuthSignIn =
    | ESECs.USER_NOT_FOUND
    | ESECs.INVALID_CREDENTIALS;

export type AuthSignOut = never;

export type AuthSignUpRequest =
    | ESECs.EMAIL_TAKEN;

export type AuthSignUpRequestResendOTP =
    | ESECs.SIGNUP_REQUEST_NOT_FOUND
    | ESECs.TOO_MANY_REQUESTS;

export type AuthSignUpVerify =
    | ESECs.SIGNUP_REQUEST_NOT_FOUND
    | ESECs.INVALID_OTP;

export type AuthChangePassword =
    | ESECs.INVALID_CREDENTIALS;

export type AuthExtractSession =
    | ESECs.INVALID_JWT;

// Team
export type TeamGet = ESECs.TEAM_NOT_FOUND;
export type TeamGetAll = never;
export type TeamCreate = ESECs.TEAM_NAME_TAKEN | ESECs.FORBIDDEN;
export type TeamUpdate = ESECs.TEAM_NOT_FOUND | ESECs.TEAM_NAME_TAKEN | ESECs.FORBIDDEN;
export type TeamAddMembers = ESECs.TEAM_NOT_FOUND | ESECs.USER_NOT_FOUND | ESECs.FORBIDDEN;
export type TeamRemove = ESECs.TEAM_NOT_FOUND | ESECs.FORBIDDEN;

// User
export type UserGet = ESECs.USER_NOT_FOUND | ESECs.FORBIDDEN;
export type UserGetAll = ESECs.FORBIDDEN;
export type UserUpdate = ESECs.USER_NOT_FOUND | ESECs.FORBIDDEN;
export type UserUpdateRoles = ESECs.USER_NOT_FOUND | ESECs.FORBIDDEN;
export type UserRemove = ESECs.USER_NOT_FOUND | ESECs.FORBIDDEN;