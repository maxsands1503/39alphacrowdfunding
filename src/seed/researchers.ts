import { Researcher } from "@/types/researcher.type";

export const Researchers: Researcher[] = [
    {
        id: 1,
        name: "Dr. Emily Carter",
        specialty: "Artificial Intelligence",
        papersPublished: [
            {
                title: "Advanced Robotics in Modern Industry",
                contributors: ["Dr. Alan Turing", "Dr. Grace Hopper"],
                publicationDate: new Date("2023-05-12"),
                publicationJournal: "International Journal of Robotics",
                abstract: "This study explores advancements in robotic automation within modern manufacturing industries."
            },
            {
                title: "Exploring Quantum Mechanics in Computational Physics",
                contributors: ["Dr. Niels Bohr", "Dr. Richard Feynman"],
                publicationDate: new Date("2022-11-08"),
                publicationJournal: "Quantum Physics Review",
                abstract: "An analysis of quantum mechanics principles as applied to computational models."
            }
        ],
        educationExperience: [
            {
                universityName: "Massachusetts Institute of Technology",
                degreeObtained: "Bachelor's",
                speciality: "Electrical Engineering",
                dateObtained: new Date("2019-07-10")
            },
            {
                universityName: "University of California, Berkeley",
                degreeObtained: "PhD",
                speciality: "Environmental Science",
                dateObtained: new Date("2022-08-20")
            },
        ],
        positionsHeld: [
            {
                title: "Senior Data Scientist",
                placeOfEmployment: "Tech Innovations Inc.",
                beginStartDate: new Date("2021-03-01"),
                isCurrentPosition: true
            },
            {
                title: "Machine Learning Engineer",
                placeOfEmployment: "AI Labs Co.",
                beginStartDate: new Date("2018-05-15"),
                isCurrentPosition: false,
                endStartDate: new Date("2021-02-28")
            },
        ]
    },
    {
        id: 2,
        name: "Dr. John Smith",
        specialty: "Quantum Computing",
        papersPublished: [
            {
                title: "Machine Learning Applications in Health Diagnostics",
                contributors: ["Dr. Marie Curie", "Dr. Alan Lloyd"],
                publicationDate: new Date("2021-09-15"),
                publicationJournal: "Journal of Healthcare Informatics",
                abstract: "Discusses machine learning applications in early diagnostics and predictive modeling."
            },
            {
                title: "Environmental Impacts of Renewable Energy Sources",
                contributors: ["Dr. Rachel Carson", "Dr. James Hansen"],
                publicationDate: new Date("2020-07-30"),
                publicationJournal: "Environmental Science Quarterly",
                abstract: "Examines the ecological effects of wind, solar, and hydroelectric power generation."
            },
            {
                title: "The Role of Genetics in Personalized Medicine",
                contributors: ["Dr. Francis Crick", "Dr. Rosalind Franklin"],
                publicationDate: new Date("2019-03-21"),
                publicationJournal: "Genomics Today",
                abstract: "Focuses on how genetics informs patient-specific treatment plans."
            },
        ],
        educationExperience: [
            {
                universityName: "Harvard University",
                degreeObtained: "PhD",
                speciality: "Computer Science",
                dateObtained: new Date("2023-06-01")
            },
            {
                universityName: "Stanford University",
                degreeObtained: "Master's",
                speciality: "Artificial Intelligence",
                dateObtained: new Date("2021-05-15")
            },
        ],
        positionsHeld: [
            {
                title: "Software Developer",
                placeOfEmployment: "CodeWorks Solutions",
                beginStartDate: new Date("2016-09-10"),
                isCurrentPosition: false,
                endStartDate: new Date("2018-04-30")
            },
            {
                title: "Project Manager",
                placeOfEmployment: "Innovate Solutions Ltd.",
                beginStartDate: new Date("2022-01-20"),
                isCurrentPosition: true
            },
        ]
    },
    {
        id: 3,
        name: "Dr. Alice Johnson",
        specialty: "Genomics",
        papersPublished: [
            {
                title: "Blockchain Technology in Financial Systems",
                contributors: ["Dr. Satoshi Nakamoto", "Dr. Hal Finney"],
                publicationDate: new Date("2018-12-10"),
                publicationJournal: "Journal of Fintech Innovations",
                abstract: "Analyzes blockchain's potential to revolutionize financial systems and transactions."
            },
            {
                title: "Artificial Intelligence for Natural Language Processing",
                contributors: ["Dr. Ada Lovelace", "Dr. Claude Shannon"],
                publicationDate: new Date("2017-08-05"),
                publicationJournal: "AI and Linguistics Journal",
                abstract: "Explores AI models for advancing natural language understanding."
            },
            {
                title: "Cybersecurity Risks in Smart City Technologies",
                contributors: ["Dr. Kevin Mitnick", "Dr. Eugene Kaspersky"],
                publicationDate: new Date("2016-02-16"),
                publicationJournal: "Cybersecurity Monthly",
                abstract: "Discusses security vulnerabilities in the technology infrastructures of smart cities."
            }
        ],
        educationExperience: [
            {
                universityName: "University of Cambridge",
                degreeObtained: "Master's",
                speciality: "Genomics",
                dateObtained: new Date("2020-11-30")
            },
            {
                universityName: "University of Oxford",
                degreeObtained: "Bachelor's",
                speciality: "Mathematics",
                dateObtained: new Date("2018-09-12")
            },
            {
                universityName: "California Institute of Technology",
                degreeObtained: "PhD",
                speciality: "Physics",
                dateObtained: new Date("2024-04-28")
            },
        ],
        positionsHeld: [
            {
                title: "Research Analyst",
                placeOfEmployment: "National Research Institute",
                beginStartDate: new Date("2019-08-01"),
                isCurrentPosition: true,
                endStartDate: new Date("2021-12-15")
            }
        ]
    }
];