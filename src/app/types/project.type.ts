export type Project = {
    id: string;
    title: string;
    desciption: string;
    tags: string[];
    contributors: string[];
    fundingGoal: number;
    fundsRaised: number;
    campaignExpiresDate: Date | null;
    totalFunders: number;
}