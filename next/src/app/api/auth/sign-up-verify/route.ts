import createHandler from '@/lib/handler';
import authValidator from '@/lib/validators/auth.validator';
import authService from '@/lib/services/auth.service';

const POST = createHandler({
    validate: authValidator.signUpVerify,
    requireAuth: false,
    serviceOptions: {
        service: authService.signUpVerify,
    }
});

export { POST };
