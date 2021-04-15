import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0 project-summary">
                <div className="card-content lighten-3 grey">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Large paragraph of font goes here. Hello sample text sample text</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Sean</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails