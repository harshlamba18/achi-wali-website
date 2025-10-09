import createHandler from '@/lib/handler';
import userValidator from '@/lib/validators/user.validator';
import userService from '@/lib/services/user.service';

const GET = createHandler({
    validate: userValidator.getAll,
    requireAuth: false,
    serviceOptions: {
        service: userService.getAll,
    }
});

export { GET };
