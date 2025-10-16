/* eslint-disable @typescript-eslint/no-namespace */

export namespace APIControl {
    export namespace Auth {
        export enum SignUp {
            REQUEST = 'request',
            RESEND_OTP = 'resend_otp',
            VERIFY = "verify",
        }
    }

    export namespace Team {
        export enum Get {
            ONE = "one",
            ALL = "all",
        }
    }

    export namespace User {
        export enum Get {
            RESTRICTED = "restricted",
            UNRESTRICTED = "unrestricted",
            ALL = "all",
        }
    }
}

/* eslint-enable @typescript-eslint/no-namespace */
