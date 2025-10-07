import { Schema, model, models } from 'mongoose';
import { IMedia, EMediaTypes } from '@/lib/types/index.types';


const MediaSchema = new Schema<IMedia>({
    key: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
    },
    type: {
        type: Schema.Types.String,
        enum: Object.values(EMediaTypes),
        required: true,
    },
    url: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },
    altText: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        default: '',
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});

const MediaModel = models.Media || model<IMedia>("Media", MediaSchema);

export default MediaModel;
