import GenericRepository from "./generic.repo";
import TeamModel from "@/lib/database/models/team.model";
import { ITeam } from "@/lib/types/index.types";


class TeamRepository extends GenericRepository<
    ITeam,
    Pick<ITeam, "name" | "description">,
    Pick<ITeam, "name" | "description" | "members" | "coverImageMediaKey">
> {
    constructor() {
        super(TeamModel);
    }
}

const teamRepository = new TeamRepository();

export default teamRepository;
