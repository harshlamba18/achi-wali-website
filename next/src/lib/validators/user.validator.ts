import { z } from "zod"
import { allIbDField } from "./core.validator";

const userValidator = {
    get: z.object({
        _id: allIbDField._id,
    }),
    getUnrestricted: z.object({
        _id: allIbDField._id,
    }),
    getAll: z.object({}),
    update: z.object({
        name: allIbDField.shortString.optional(),
        profileImgMediaKey: allIbDField.mediaKey.optional(),
        phoneNumber: allIbDField.phoneNumber.optional(),
        links: z.array(allIbDField.link).optional(),
    }),
    updateRoles: z.object({
        _id: allIbDField._id,
        roles: allIbDField.roles,
    }),
    remove: z.object({
        _id: allIbDField._id,
    }),
}

export default userValidator;
