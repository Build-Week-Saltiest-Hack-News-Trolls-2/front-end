import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import styled from "styled-components";
import { Form, Label, Input, Button } from 'reactstrap'
import {useHistory} from "react-router-dom";
import * as yup from 'yup'
   
const AltInstructions = styled.span`
text-decoration: underline;
cursor: pointer;
font-size: 0.8rem;
`
const schema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(4, 'Username must be at least 4 characters'),
    password: yup
        .string()
        .required()
        .min(6, 'Password must be at least 6 characters')
})

const initialErrors = {
    username: '',
    password: '',
}

const LoginForm = props => {
    const {push} = useHistory();
    const [errors, setErrors] = useState(initialErrors)
    const [canSubmit, setCanSubmit] = useState(false)
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

        //values needed for async
        const name = e.target.name
        const value = e.target.value
        //Error handling
        yup
            .reach(schema, name)
            .validate(value)
            .then(valid => {
                setErrors({...errors, [name]: '',})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            })
    }

    //Disable Submit unless form is valid
    useEffect(() => {
        schema.isValid(credentials)
            .then(valid => {
                setCanSubmit(!canSubmit)
            })
    },[credentials, canSubmit])

    const handleSubmit = e => {
        e.preventDefault();
        if(!needsAccount) {
            axiosWithAuth()
                .post("/api/auth/login", credentials)
                .then(res => {
                    console.log({res});
                    localStorage.setItem('token', JSON.stringify(res.data.token))
                    push('/letmein');
                    window.location.reload(false);
                })
                .catch(err => {
                    alert("Username or Password Incorrect")
                })
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
        <div className="RightSideWrapper">
            <h2>{(!needsAccount) ? "Log In" : "Create an Account"}</h2>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="Username" >Username</Label>
                <div className='errors'>{errors.username}</div>
                <Input 
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChanges}
                /> 
                <Label htmlFor="Password" >Password</Label>
                <div className='errors'>{errors.password}</div>
                <Input 
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChanges}
                /> 
                <div>
                    <Button data-testid="submitButton">{(!needsAccount) ? "Log In" : "Create Account"}</Button> <p>or <AltInstructions onClick={()=> setNeedsAccount(!needsAccount)}>{(!needsAccount) ? "Create an Account" : "Log in with Existing Account"}</AltInstructions> </p>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm;