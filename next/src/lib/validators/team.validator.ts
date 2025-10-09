import { z } from "zod"
import { allIbDField } from "./core.validator";

const teamValidator = {
    get: z.object({
        _id: allIbDField._id,
    }),
    getAll: z.object({}),
    create: z.object({
        name: allIbDField.shortString,
        description: allIbDField.longString,
    }),
    update: z.object({
        _id: allIbDField._id,
        name: allIbDField.shortString.optional(),
        description: allIbDField.longString.optional(),
        coverImageMediaKey: allIbDField.shortString.optional(),
    }),
    addMembers: z.object({
        _id: allIbDField._id,
        memberIds: z.array(allIbDField._id),
    }),
    remove: z.object({
        _id: allIbDField._id,
    }),
}

export default teamValidator;
