import React, {useState} from 'react'

const CreateProject = () => {
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, content)
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
                <h4 className="grey-text text-darken-3">Sign In</h4>
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

export default CreateProject