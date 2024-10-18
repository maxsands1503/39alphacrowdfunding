import { Project } from "@/app/types/project.type";
import Link from "next/link";

export default function ProjectCard({project}: {project: Project}) {
    return (
        <>
            <div className={'gap-2 rounded-md w-full min-h-24 h-40 border-2 border-black mt-4 p-2'}>
                <h3>
                    <Link href={`projects/${project.id}`}>{project.title}</Link>
                </h3>
                <span>{project.fundingGoal}</span>


            </div>
        </>
    );
}