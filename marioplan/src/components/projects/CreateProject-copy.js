import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'

class CreateProject extends React.Component {

    state = {
        title: "",
        content: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.setState({
            title: "",
            content: ""
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
           <div className="container">
               <form onSubmit = {this.handleSubmit} action="" className="white">
                    <h4 className="grey-text text-darken-3">Create New Project</h4>
                    <div className="input-field">
                       <label htmlFor="title">Title</label>
                       <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="content">Project Content</label>
                       <textarea onChange = {this.handleChange} id ="content" className = "materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <input type="submit" id ="submit"/>
                    </div>
                </form>
            </div>
        )
    }


}

const mdp = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mdp)(CreateProject)