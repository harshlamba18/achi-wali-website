import GenericRepository from "./generic.repo";
import MediaModel from "@/lib/database/models/blog.model";
import { IMedia } from "@/lib/types/index.types";


class MediaRepository extends GenericRepository<
    IMedia,
    Pick<IMedia, "key" | "type" | "url" | "altText" | "uploadedBy">,
    Pick<IMedia, "key" | "type" | "url" | "altText" | "uploadedBy">
> {
    constructor() {
        super(MediaModel);
    }
}

const mediaRepository = new MediaRepository();

export default mediaRepository;
