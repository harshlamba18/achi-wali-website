import createHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const GET = createHandler({
    validate: teamValidator.get,
    requireAuth: false,
    serviceOptions: {
        service: teamServices.get,
    }
});

export { GET };
