import createHandler from '@/lib/handler';
import authValidator from '@/lib/validators/auth.validator';
import authService from '@/lib/services/auth.service';

const POST = createHandler({
    validate: authValidator.signUpRequest,
    requireAuth: false,
    serviceOptions: {
        service: authService.signUpRequest,
    }
});

export { POST };
