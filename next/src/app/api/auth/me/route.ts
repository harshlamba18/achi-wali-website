import createHandler from '@/lib/handler';
import authValidator from '@/lib/validators/auth.validator';
import authService from '@/lib/services/auth.service';

const GET = createHandler({
    validate: authValidator.me,
    requireAuth: true,
    serviceOptions: {
        service: authService.me,
    }
});

export { GET };
