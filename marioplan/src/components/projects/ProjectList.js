import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {
    let {projects} = props
    console.log("Did this work?", projects)
    return(
        <div className="project-list section">
            {projects && projects.map(project => <ProjectSummary project = {project} key = {project.id}/>)}
        </div>
    )
}

export default ProjectList