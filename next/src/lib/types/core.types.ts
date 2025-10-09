import { NextRequest, NextResponse } from "next/server";
import { ZodSchema } from "zod";
import { Types } from "mongoose";
import { EUserRole, ESECs, SuccessResponseCodesEnum, ISetCookie } from "./index.types";

export enum ELogLevel {
    FATAL = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4,
}

export interface ISession {
    userId: Types.ObjectId;
    userEmail: string;
    userRoles: EUserRole[]
}

export interface IEmail {
    to: string;
    subject: string;
    text: string;
    html: string;
}

type GenericServiceOptions<T, SECs extends ESECs, RequireAuth extends boolean> = {
    service: RequireAuth extends true
    ? (session: ISession, data: T) => Promise<IServiceResolve<SECs, any>>
    : (data: T) => Promise<IServiceResolve<SECs, any>>;
    successCode?: SuccessResponseCodesEnum;
    onSuccess?: (sDOut: any) => {
        responseData: any;
        cookies?: ISetCookie[];
    };
};


export type ControllerContext<T, RequireAuth extends boolean> = {
    req: NextRequest;
    data: T;
} & (RequireAuth extends true ? { session: ISession } : { session: null });

export type HandlerOptions<T, RequireAuth extends boolean = false> = {
    validate?: ZodSchema<T>;
    requireAuth?: RequireAuth;
} & (
        | {
            controller: (ctx: ControllerContext<T, RequireAuth>) => Promise<NextResponse>;
            serviceOptions?: never;
        }
        | {
            controller?: never;
            serviceOptions: GenericServiceOptions<
                T,
                any,
                RequireAuth
            >;
        }
    );

export type IServiceResolve<C extends ESECs, T> =
    | {
        success: true,
        data: T
    }
    | {
        success: false,
        errorCode: C;
        errorMessage?: string;
    }

export type ServiceSignature<
    SDIn,
    SECs extends ESECs,
    RequireSession extends boolean = false
> = RequireSession extends true
    ? (session: ISession, data: SDIn) => Promise<IServiceResolve<SECs, any>>
    : (data: SDIn) => Promise<IServiceResolve<SECs, any>>;

