import { Types } from "mongoose";

export enum EUserRole {
    GUEST = "GUEST",
    MEMBER = "MEMBER",
    EXECUTIVE = "EXECUTIVE",
    HEAD = "HEAD",
    ADMIN = "ADMIN",
    ROOT = "ROOT",
}

export interface ISignUpRequest {
    _id: Types.ObjectId;
    name: string;
    email: string;
    passwordHash: string;
    otpHash: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    _id: Types.ObjectId;
    name: string;
    email: string;
    passwordHash: string;
    profileImgMediaKey: string | null;
    phoneNumber: string | null;
    links: {
        label: string;
        url: string;
    }[];
    teamId: Types.ObjectId | null;
    roles: EUserRole[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ITeam {
    _id: Types.ObjectId;
    name: string;
    description: string;
    members: Types.ObjectId[];
    coverImageMediaKey: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProject {
    _id: Types.ObjectId;
    title: string;
    description: string;
    tags: string[];
    authors: Types.ObjectId[];
    links: {
        text: string;
        url: string;
    }[];
    coverImgMediaKey: string | null;
    media: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IBlog {
    _id: Types.ObjectId;
    title: string;
    slug: string;
    content: string;
    tags: string[];
    authors: Types.ObjectId[];
    coverImgMediaKey: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export enum EMediaTypes {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
}

export interface IMedia {
    _id: Types.ObjectId;
    key: string;
    type: EMediaTypes;
    url: string;
    altText: string;
    uploadedBy: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
