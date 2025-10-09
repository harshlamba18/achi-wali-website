import createHandler from '@/lib/handler';
import userValidator from '@/lib/validators/user.validator';
import userService from '@/lib/services/user.service';

const PATCH = createHandler({
    validate: userValidator.update,
    requireAuth: true,
    serviceOptions: {
        service: userService.update,
    }
});

export { PATCH };
