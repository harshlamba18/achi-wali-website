import createHandler from '@/lib/handler';
import authValidator from '@/lib/validators/auth.validator';
import authService from '@/lib/services/auth.service';
import { SuccessResponseCodesEnum } from '@/lib/types/index.types';
import { cookieOptions } from '@/lib/utils/cookie';
import { SESSION_COOKIE_NAME } from '@/lib/config/constants';

type SignoutResponse = {
    // edit this type while setup
    token: string;
}

const POST = createHandler({
    validate: authValidator.signOut,
    requireAuth: true,
    serviceOptions: {
        service: authService.signOut,
        successCode: SuccessResponseCodesEnum.OK,
        onSuccess: (sDOut: SignoutResponse) => {
            return {
                responseData: {},
                cookies: [{
                    name: SESSION_COOKIE_NAME,
                    value: sDOut.token,
                    options: cookieOptions.jwt
                }]
            }
        }
    }
});

export { POST };
