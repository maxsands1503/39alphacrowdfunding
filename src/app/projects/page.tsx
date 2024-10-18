import ProjectsList from "./projects-list";
import {projects} from "@/seed/projects";

export default function Page() {
    return (
        <>
            <h1>Projects</h1>
            <ProjectsList projects={projects}/>
        </>
    )
}