import createHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const PATCH = createHandler({
    validate: teamValidator.addMembers,
    requireAuth: true,
    serviceOptions: {
        service: teamServices.addMembers,
    }
});

export { PATCH };
