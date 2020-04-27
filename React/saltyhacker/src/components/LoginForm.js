import React, {useState} from "react";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import styled from "styled-components";

const AltInstructions = styled.span`
text-decoration: underline;
cursor: pointer;
font-size: 0.8rem;
`

const LoginForm = () => {
    const [needsAccount, setNeedsAccount ] = useState(false);
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!needsAccount) {
            axiosWithAuth()
                .post("/api/login", credentials)
                .then(res => {
                    console.log({res});
                    localStorage.setItem('token', JSON.stringify(res.data))
                    // push history to homepage 
                })
                .catch(err => console.log(err))
        }
        if(needsAccount) {
            axiosWithAuth()
                .post("/api/signup", credentials)
                .then(res => {
                    console.log({res});
                    localStorage.setItem('token', JSON.stringify(res.data))
                    // push history to homepage 
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div>
            <h2>{(!needsAccount) ? "Log In" : "Create an Account"}</h2>
            <form>
                <label htmlFor="Username" >Username</label>
                <input 
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChanges}
                /> <br />
                <label htmlFor="Password" >Password</label>
                <input 
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChanges}
                /> <br />
                <div>
                    <button>{(!needsAccount) ? "Log In" : "Create Account"}</button> <p>or <AltInstructions onClick={()=> setNeedsAccount(!needsAccount)}>{(!needsAccount) ? "Create an Account" : "Log in with Existing Account"}</AltInstructions> </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;