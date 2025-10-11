import createHandler from '@/lib/handler';
import authValidator from '@/lib/validators/auth.validator';
import authService from '@/lib/services/auth.service';
import { cookieOptions } from '@/lib/utils/cookie';
import { SESSION_COOKIE_NAME } from '@/lib/config/constants';

type SignInResponse = {
//   This type must be changed appropriately for the auth setup
  
    token: string;
  userId: string;
  // add any other fields your service returns
};


const POST = createHandler({
    validate: authValidator.signIn,
    requireAuth: false,
    serviceOptions: {
        service: authService.signIn,
        onSuccess: (sDOut: SignInResponse) => {
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
