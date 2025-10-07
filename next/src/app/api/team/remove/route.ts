import createHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const DELETE = createHandler({
    validate: teamValidator.remove,
    requireAuth: true,
    serviceOptions: {
        service: teamServices.remove,
    }
});

export { DELETE };
