"use client"

const ProjectDetail = ({ params }: { params: { projectDetailSlug: string } }) => {
    
  return <div>{params.projectDetailSlug}</div>
  }

  export default ProjectDetail;