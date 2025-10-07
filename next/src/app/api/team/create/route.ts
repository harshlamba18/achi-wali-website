import createHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const POST = createHandler({
    validate: teamValidator.create,
    requireAuth: true,
    serviceOptions: {
        service: teamServices.create,
    }
});

export { POST };
