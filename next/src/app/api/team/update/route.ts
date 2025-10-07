import createHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const PATCH = createHandler({
    validate: teamValidator.update,
    requireAuth: true,
    serviceOptions: {
        service: teamServices.update,
    }
});

export { PATCH };
