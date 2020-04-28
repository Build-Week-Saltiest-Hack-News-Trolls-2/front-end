import React, {useState} from "react";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import styled from "styled-components";
import { Form, Label, Input, Button } from 'reactstrap'

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
                .post("/api/auth/login", credentials)
                .then(res => {
                    console.log({res});
                    localStorage.setItem('token', JSON.stringify(res.data.token))
                    // push history to homepage 
                })
                .catch(err => console.log(err))
        }
        if(needsAccount) {
            axiosWithAuth()
                .post("/api/auth/register", credentials)
                .then(res => {
                    console.log({res});
                    alert('Sucessfully created Account')
                    setNeedsAccount(!needsAccount)
                    // push history to homepage 
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div className="LoginWrapper">
            <h2>{(!needsAccount) ? "Log In" : "Create an Account"}</h2>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="Username" >Username</Label>
                <Input 
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChanges}
                /> 
                <Label htmlFor="Password" >Password</Label>
                <Input 
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChanges}
                /> 
                <div>
                    <Button>{(!needsAccount) ? "Log In" : "Create Account"}</Button> <p>or <AltInstructions onClick={()=> setNeedsAccount(!needsAccount)}>{(!needsAccount) ? "Create an Account" : "Log in with Existing Account"}</AltInstructions> </p>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm;