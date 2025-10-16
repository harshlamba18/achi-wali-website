import createServiceOnlyHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const PATCH = createServiceOnlyHandler({
    validationSchema: teamValidator.addMembers,
    requireAuth: true,
    options: {
        service: teamServices.addMembers,
    }
});

export { PATCH };
