import createHandler from '@/lib/handler';
import userValidator from '@/lib/validators/user.validator';
import userService from '@/lib/services/user.service';

const PATCH = createHandler({
    validate: userValidator.updateRoles,
    requireAuth: true,
    serviceOptions: {
        service: userService.updateRoles,
    }
});

export { PATCH };
