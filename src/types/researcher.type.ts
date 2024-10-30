import { EducationExperience } from "./education-experience.type";
import { Publication } from "./publication.type";
import { Position } from "./position.type";


export type Researcher = {
    id: number;
    name: string
    specialty: string;
    papersPublished : Publication[];
    educationExperience: EducationExperience[];
    positionsHeld: Position[];
}