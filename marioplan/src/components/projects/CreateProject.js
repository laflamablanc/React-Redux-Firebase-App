import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'

const CreateProject = (props) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createProject({
            title: title,
            content: content
        })
        setTitle("")
        setContent("")
    }
    
    const handleChange = (e) => {
        if (e.target.id === "title"){
            setTitle(e.target.value)
        } else {
            setContent(e.target.value)
        }
    }

    return (
       <div className="container">
           <form onSubmit = {handleSubmit} action="" className="white">
                <h4 className="grey-text text-darken-3">Create New Project</h4>
                <div className="input-field">
                   <label htmlFor="title">Title</label>
                   <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input-field">
                   <label htmlFor="content">Project Content</label>
                   <textarea onChange = {handleChange} id ="content" className = "materialize-textarea"></textarea>
                </div>
                <div className="input-field">
                    <input type="submit" id ="submit"/>
                </div>
            </form>
        </div>
    )
}

const mdp = (dispatch) => {
    return {
        createProject: (project) => dispatch(CreateProject(project))
    }
}

export default connect(null, mdp)(CreateProject)