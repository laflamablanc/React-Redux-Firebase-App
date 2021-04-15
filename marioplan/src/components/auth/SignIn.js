import React, {useState} from 'react'

const SignIn = () => {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        setUsername("")
        setPassword("")
    }
    
    const handleChange = (e) => {
        if (e.target.id === "email"){
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    return (
       <div className="container">
           <form onSubmit = {handleSubmit} action="" className="white">
                <h4 className="grey-text text-darken-3">Sign In</h4>
                <div className="input-field">
                   <label htmlFor="email">Email</label>
                   <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <input type="submit" id ="submit"/>
                </div>
            </form>
        </div>
    )
}

export default SignIn