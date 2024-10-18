import ProjectCard from "../components/project-card";
import { Project } from "../types/project.type";

const ProjectsList = ({projects}: {projects: Project[]}) => {
    return (
        <div className={'w-full p-2'}>
            { projects.map((proj) => {
                return <ProjectCard project={proj} />
            })

            }
        </div>
    );
}

export default ProjectsList;