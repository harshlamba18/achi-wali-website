import createHandler from '@/lib/handler';
import userValidator from '@/lib/validators/user.validator';
import userService from '@/lib/services/user.service';

const DELETE = createHandler({
    validate: userValidator.remove,
    requireAuth: true,
    serviceOptions: {
        service: userService.remove,
    }
});

export { DELETE };
