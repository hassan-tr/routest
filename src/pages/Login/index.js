import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/authContext";

const Login = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const onUserChange = (e) => {
        setUsername(e.target.value)
    }
    const onPassChange = (e) => {
        setPass(e.target.value)
    }

    const onSubmit = () => {
        setIsLoggedIn(true)
        window.location.replace('/')
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{display: "flex", flexDirection: 'column', rowGap: 10}}>
                <label>Username</label>
                <input onChange={onUserChange} value={username}/>
                <label>Password</label>
                <input onChange={onPassChange} value={pass}/>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login