import teamRepository from "@/lib/database/repos/team.repo";
import userRepository from "@/lib/database/repos/user.repo";
import {
    SECs,
    ESECs,
    ServiceSignature,
    EUserRole,
} from "@/lib/types/index.types";
import { Types } from "mongoose";
import { withSession } from "../database/db";


const get: ServiceSignature<{
    _id: Types.ObjectId
}, SECs.Team.Get, false
> = async (data) => {
    const team = await teamRepository.findById(data._id);
    if (!team) {
        return {
            success: false,
            errorCode: ESECs.TEAM_NOT_FOUND,
            errorMessage: "Team not found.",
        };
    }

    return {
        success: true,
        data: {
            ...team,
            _id: team._id.toHexString(),
            members: team.members.forEach(_id => _id.toHexString())
        }
    };
};

const getAll: ServiceSignature<{}, SECs.Team.GetAll, false
> = async (_) => {
    const teams = await teamRepository.findAll({});

    return {
        success: true,
        data: teams.map(team => {
            return {
                _id: team._id.toHexString(),
                name: team.name,
                description: team.description,
                coverImageMediaKey: team.coverImageMediaKey,
            }
        }),
    };
};

const create: ServiceSignature<{
    name: string,
    description: string,
}, SECs.Team.Create, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only admin can create a new team."
        }
    }

    const existingTeam = await teamRepository.findOne({
        name
    });

    if (existingTeam) {
        return {
            success: false,
            errorCode: ESECs.TEAM_NAME_TAKEN,
            errorMessage: "A team with this name already exists.",
        };
    }

    await teamRepository.insert({
        name: data.name,
        description: data.description,
    });

    return {
        success: true,
        data: {},
    };
};


const addMembers: ServiceSignature<{
    _id: Types.ObjectId,
    memberIds: Types.ObjectId[],
}, SECs.Team.AddMembers, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only admin can add team members."
        }
    }

    const team = await teamRepository.findById(data._id);
    if (!team) {
        return {
            success: false,
            errorCode: ESECs.TEAM_NOT_FOUND,
            errorMessage: "Team not found.",
        };
    }

    await withSession(async (dbSession) => {
        await teamRepository.updateById(
            data._id,
            {
                $addToSet: {
                    members: {
                        $each: data.memberIds,
                    },
                },
            }, dbSession
        );

        await userRepository.updateMany(
            {
                _id: {
                    $in: data.memberIds
                }
            },
            {
                $set: {
                    teamId: data._id,
                }
            },
            dbSession
        );

    });

    return {
        success: true,
        data: {},
    };
};

const update: ServiceSignature<{
    _id: Types.ObjectId,
    name?: string,
    description?: string,
    coverImageMediaKey?: string,
}, SECs.Team.Update, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only admin can update team's details."
        }
    }

    const team = await teamRepository.findById(data._id);
    if (!team) {
        return {
            success: false,
            errorCode: ESECs.TEAM_NOT_FOUND,
            errorMessage: "Team not found.",
        };
    }

    await teamRepository.updateById(data._id, {
        name: data.name,
        description: data.description,
        coverImageMediaKey: data.coverImageMediaKey,
    });

    return {
        success: true,
        data: {},
    };
};

const remove: ServiceSignature<{
    _id: Types.ObjectId
}, SECs.Team.Remove, true
> = async (session, data) => {
    if (!session.userRoles.includes(EUserRole.ADMIN)) {
        return {
            success: false,
            errorCode: ESECs.FORBIDDEN,
            errorMessage: "Only admin can update team's details."
        }
    }

    const team = await teamRepository.findById(data._id);
    if (!team) {
        return {
            success: false,
            errorCode: ESECs.TEAM_NOT_FOUND,
            errorMessage: "Team not found.",
        };
    }

    await withSession(async (dbSession) => {
        await teamRepository.removeById(data._id, dbSession);
        await userRepository.updateMany(
            {
                _id: data._id,
            },
            {
                $set: {
                    teamId: null,
                }
            },
            dbSession
        );
    });

    return {
        success: true,
        data: {},
    };
};


const teamServices = {
    get,
    getAll,
    create,
    update,
    addMembers,
    remove
};


export default teamServices;

