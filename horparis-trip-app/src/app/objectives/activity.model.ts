import { Objective } from "./objective.model";

export interface Activity {
    id: number;
    title: string;
    description: string;
    objectives: Objective[];
    showObjectives: boolean;
    link: string;
}