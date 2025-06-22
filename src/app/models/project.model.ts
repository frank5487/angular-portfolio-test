import { Tag } from "./tag.model";

export interface ProjectModel {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}