import { ResearcherSlim } from "./researcher-slim.type";

export type Project = {
    id: string;
    title: string;
    desciption: string;
    tags: string[];
    contributors: ResearcherSlim[];
    fundingGoal: number;
    fundsRaised: number;
    campaignExpiresDate: Date | null;
    totalFunders: number;
}