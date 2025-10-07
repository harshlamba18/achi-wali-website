import { Schema, model, models } from 'mongoose';
import { ISignUpRequest } from '@/lib/types/index.types';


const SignUpRequestSchema = new Schema<ISignUpRequest>({
    name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    passwordHash: {
        type: Schema.Types.String,
        required: true,
    },
    otpHash: {
        type: Schema.Types.String,
        required: true,
    },
    expiresAt: {
        type: Schema.Types.Date,
        required: true,
    }
}, {
    timestamps: true,
});

SignUpRequestSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const SignUpRequest = models.SignUpRequest
    || model<ISignUpRequest>('SignUpRequest', SignUpRequestSchema);

export default SignUpRequest;

