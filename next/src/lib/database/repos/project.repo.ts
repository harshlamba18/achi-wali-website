import GenericRepository from "./generic.repo";
import ProjectModel from "@/lib/database/models/project.model";
import { IProject } from "@/lib/types/index.types";


class ProjectRepository extends GenericRepository<
    IProject,
    Pick<IProject, "title" | "description" | "tags" | "authors" | "links"
        | "coverImgMediaKey" | "media"
    >,
    Pick<IProject, "title" | "description" | "tags" | "authors" | "links"
        | "coverImgMediaKey" | "media"
    >
> {
    constructor() {
        super(ProjectModel);
    }
}

const projectRepository = new ProjectRepository();

export default projectRepository;
