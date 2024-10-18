export type Project = {
    title: string;
    desciption: string;
    tags: string[];
    contributors: string[];
    fundingGoal: number;
    fundsRaised: number;
    campaignExpiresDate: Date | null;
    totalFunders: number;
}

export const projects: Project[] = [
    {
        title: "Space Laser for Weather Control",
        desciption: "This will be a giant space based laser that can make clouds or cause draughts or some such.",
        tags: ['climate-change'],
        contributors: ['Dr. Evil'],
        fundingGoal: 1000000,
        fundsRaised: 25000,
        campaignExpiresDate: null,
        totalFunders: 10
    },
    {
        title: "Geothermal Reactor",
        desciption: "Harness the energy of the earth bro",
        tags: ['clean-energy'],
        contributors: ['Dr. The Rock'],
        fundingGoal: 200000,
        fundsRaised: 45000,
        campaignExpiresDate: new Date('2026-12-17T00:00:00'),
        totalFunders: 110
    },
    {
        title: "Nuclear Powered Fuel Cell",
        desciption: "Cars aren't Dangerous Enough",
        tags: ['climate-change'],
        contributors: ['Dr. Bombastic'],
        fundingGoal: 1000000,
        fundsRaised: 25000,
        campaignExpiresDate: null,
        totalFunders: 10
    },
    {
        title: "AI applications in Medicine",
        desciption: "Getting an MD is super expensive, let's just code one instead",
        tags: ['clean-energy'],
        contributors: ['Dr. Robotnik'],
        fundingGoal: 16200000,
        fundsRaised: 945000,
        campaignExpiresDate: new Date('2026-12-17T00:00:00'),
        totalFunders: 110
    },
    {
        title: "Artificial Thyroid Glands",
        desciption: "These dudes are unreliable",
        tags: ['climate-change'],
        contributors: ['Dr. Gland'],
        fundingGoal: 5000000,
        fundsRaised: 895000,
        campaignExpiresDate: null,
        totalFunders: 10
    },
    {
        title: "Archeological Exploration of Montana",
        desciption: "We are looking for some super sweet dino bones",
        tags: ['clean-energy'],
        contributors: ['Dr. Evil'],
        fundingGoal: 1200000,
        fundsRaised: 45600,
        campaignExpiresDate: new Date('2026-12-17T00:00:00'),
        totalFunders: 110
    }
];