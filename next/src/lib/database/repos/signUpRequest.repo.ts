import { ClientSession } from "mongoose";
import GenericRepository from "./generic.repo";
import SignUpRequestModel from "../models/signUpRequest.model";
import { ISignUpRequest } from "@/lib/types/index.types";
import AppError from "@/lib/utils/error";


class SignUpRequestRepository extends GenericRepository<
    ISignUpRequest,
    Pick<ISignUpRequest, "name" | "email" | "passwordHash" | "otpHash" | "expiresAt">,
    Pick<ISignUpRequest, "name" | "passwordHash" | "otpHash" | "expiresAt">
> {
    constructor() {
        super(SignUpRequestModel);
    }

    async findByEmail(email: string, session?: ClientSession): Promise<ISignUpRequest | null> {
        await this.ensureDbConnection();

        try {
            return await this.model.findOne({ email }).session(session || null).lean<ISignUpRequest>().exec();
        } catch (error) {
            throw new AppError('Failed to find document.', {
                email,
                error
            });
        }
    }
}

const signUpRequestRepository = new SignUpRequestRepository();

export default signUpRequestRepository;

