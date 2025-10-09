import GenericRepository from "./generic.repo";
import BlogModel from "@/lib/database/models/blog.model";
import { IBlog } from "@/lib/types/index.types";


class BlogRepository extends GenericRepository<
    IBlog,
    Pick<IBlog, "title" | "slug" | "content" | "tags" | "authors"
        | "coverImgMediaKey"
    >,
    Pick<IBlog, "title" | "slug" | "content" | "tags" | "authors"
        | "coverImgMediaKey"
    >
> {
    constructor() {
        super(BlogModel);
    }
}

const blogRepository = new BlogRepository();

export default blogRepository;
