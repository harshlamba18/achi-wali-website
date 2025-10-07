import createHandler from '@/lib/handler';
import authValidator from '@/lib/validators/auth.validator';
import authService from '@/lib/services/auth.service';

const PATCH = createHandler({
    validate: authValidator.changePassword,
    requireAuth: true,
    serviceOptions: {
        service: authService.changePassword,
    }
});

export { PATCH };
