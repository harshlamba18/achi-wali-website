import ResponseHandler from '@/lib/utils/responseHandler';
import validator from '@/lib/validators/core.validator';
import authService from '@/lib/services/auth.service';
import {
    ESECs,
    FailedResponseCodeEnum,
    FailureResponseCodesEnum,
    ControllerContext,
    HandlerOptions,
    IServiceResolve,
    ISession,
    SuccessResponseCodesEnum,
} from '@/lib/types/index.types';
import log, { ELogLevel } from './utils/logger';
import { NextRequest, NextResponse } from 'next/server';
import AppError from './utils/error';
import { safeJSONStringify } from './utils/serialize';


const createHandler = <T = unknown, RequireAuth extends boolean = false>({
    validate,
    requireAuth = false as RequireAuth,
    controller,
    serviceOptions,
}: HandlerOptions<T, RequireAuth>) => {
    return async (req: NextRequest): Promise<NextResponse> => {
        let body: any = {};
        let data: any = {};
        let session: RequireAuth extends true ? ISession : null = null as any;
        const responseHandler = new ResponseHandler();

        const defaultOnSuccess = (sDOut: any) => ({
            responseData: sDOut,
            cookies: undefined,
        });

        try {
            if (requireAuth) {
                session = (await authService.extractSession(req)) as any;

                if (!session) {
                    return new ResponseHandler().sendFailed(
                        FailedResponseCodeEnum.UNAUTHORIZED
                    );
                }
            } else {
                session = null as any;
            }

            if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method || "")) {
                const rawBody = await req.text();
                if (!rawBody) {
                    return responseHandler.sendFailed(
                        FailedResponseCodeEnum.BAD_REQUEST,
                        "Request body is missing."
                    );
                }

                try {
                    body = JSON.parse(rawBody);
                } catch (err) {
                    return responseHandler.sendFailed(
                        FailedResponseCodeEnum.BAD_REQUEST,
                        "Invalid JSON format."
                    );
                }
            }

            if (validate) {
                const result = await validator(body, validate);

                if (!result.success) {
                    return responseHandler.sendFailed(
                        FailedResponseCodeEnum.BAD_REQUEST,
                        result.error
                    );
                }

                data = result.data;
            }

            const controllerContext: ControllerContext<T, RequireAuth>
                = { req, data, session } as ControllerContext<T, RequireAuth>;

            if (controller) {
                return await controller(controllerContext);
            }
            else if (serviceOptions) {
                const service: any = serviceOptions.service;
                let serviceResponse: IServiceResolve<any, any>;

                if (requireAuth) {
                    serviceResponse = await service(session, data);
                }
                else {
                    serviceResponse = await service(data);
                }

                if (!serviceResponse.success) {
                    return DefaultServiceErrorCodeHandler(
                        responseHandler,
                        serviceResponse.errorCode,
                        serviceResponse.errorMessage
                    );
                }

                const { responseData, cookies } =
                    (serviceOptions.onSuccess ?? defaultOnSuccess)(
                        serviceResponse.data
                    );

                // log(ELogLevel.DEBUG, "final output", {
                //     serviceResponseData: serviceResponse.data,
                //     responseData,
                //     cookies,
                // });

                if (cookies) {
                    cookies.forEach((cookie) =>
                        responseHandler.setCookie(
                            cookie.name,
                            cookie.value,
                            cookie.options
                        )
                    );
                }

                return responseHandler.sendSuccess(
                    serviceOptions.successCode ?? SuccessResponseCodesEnum.OK,
                    responseData
                );
            }
            else {
                throw new AppError("Handler misconfiguration.", {});
            }

        } catch (error) {
            if (error instanceof AppError) {
                log(ELogLevel.ERROR, 'AppError: While resolving API response.', {
                    url: req.url,
                    body: req.body,
                    error: {
                        name: error.name,
                        message: error.message,
                        peek: safeJSONStringify(error.peek),
                        cause: error.cause,
                        stack: error.stack,
                    }
                });
            }
            else if (error instanceof Error) {
                log(ELogLevel.ERROR, 'GenericError: While resolving API response.', {
                    url: req.url,
                    body: req.body,
                    error: {
                        name: error.name,
                        message: error.message,
                        cause: error.cause,
                        stack: error.stack,
                    }
                });
            }
            else {
                log(ELogLevel.ERROR, 'AppError: While resolving API response.', {
                    url: req.url,
                    body: req.body,
                    error: safeJSONStringify(error),
                });
            }

            return responseHandler.sendFailure(
                FailureResponseCodesEnum.INTERNAL_SERVER_ERROR
            );
        }
    };
};


const DefaultServiceErrorCodeHandler = (
    responseHandler: ResponseHandler,
    errorCode: ESECs,
    errorMessage?: string,
): NextResponse => {
    switch (errorCode) {
        case ESECs.USER_NOT_FOUND:
        case ESECs.SIGNUP_REQUEST_NOT_FOUND:
            return responseHandler.sendFailed(FailedResponseCodeEnum.NOT_FOUND, errorMessage);

        case ESECs.INVALID_CREDENTIALS:
        case ESECs.INVALID_JWT:
        case ESECs.INVALID_OTP:
            return responseHandler.sendFailed(FailedResponseCodeEnum.UNAUTHORIZED, errorMessage);

        case ESECs.EMAIL_TAKEN:
            return responseHandler.sendFailed(FailedResponseCodeEnum.CONFLICT, errorMessage);

        case ESECs.FORBIDDEN:
            return responseHandler.sendFailed(FailedResponseCodeEnum.FORBIDDEN, errorMessage);

        case ESECs.TOO_MANY_REQUESTS:
            return responseHandler.sendFailed(FailedResponseCodeEnum.TOO_MANY_REQUESTS, errorMessage);

        default:
            log(ELogLevel.ERROR, `Unhandled ESECs code in ServiceErrorCodeHandler: ${errorCode}`);
            throw new AppError("Unhandled service client error code.", { errorCode });
    }
};

export default createHandler;
