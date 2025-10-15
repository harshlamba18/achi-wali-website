import createServiceOnlyHandler from '@/lib/handler';
import teamValidator from '@/lib/validators/team.validator';
import teamServices from '@/lib/services/team.service';

const GET = createServiceOnlyHandler({
    validationSchema: teamValidator.get,
    requireAuth: false,
    options: {
        service: teamServices.get,
    }
});

const POST = createServiceOnlyHandler({
    validationSchema: teamValidator.create,
    requireAuth: true,
    options: {
        service: teamServices.create,
    }
});

const PATCH = createServiceOnlyHandler({
    validationSchema: teamValidator.update,
    requireAuth: true,
    options: {
        service: teamServices.update,
    }
});

const DELETE = createServiceOnlyHandler({
    validationSchema: teamValidator.remove,
    requireAuth: true,
    options: {
        service: teamServices.remove,
    }
});

export { GET, POST, PATCH, DELETE };
