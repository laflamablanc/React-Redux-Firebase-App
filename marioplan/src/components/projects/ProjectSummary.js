import React from 'react'

const ProjectSummary = (props) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content lighten-3 grey">
                <span className="card-title">{props.project.title}</span>
                <p>{props.project.content}</p>
                <p className = "grey-text">4/14/2021</p>
            </div>
        </div>
    )
}

export default ProjectSummary