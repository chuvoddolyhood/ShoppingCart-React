import React from 'react'
import { useState } from 'react'
import InputControl from './InputControl'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../config/Config'

const Login = () => {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    const [messError, setMessError] = useState('')
    const navigate = useNavigate();

    const logInHandle = () => {
        // console.log(value);
        if (!value.email || !value.password) {
            setMessError("Please fill in the above fields.")
            return;
        }
        setMessError('');

        signInWithEmailAndPassword(auth, value.email, value.password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: value.email
                })
                navigate("/")
            })
            .catch((error) => {
                setMessError(error.message);
            });
    }

    return (
        <div className='login-container'>
            <div className='login-innerBox'>
                <h1>Log in</h1>
                <InputControl
                    label="Email"
                    placeholder="Enter your email"
                    onChange={event => setValue(prev => ({
                        ...prev, email: event.target.value
                    }))}
                />
                <InputControl
                    label="Password"
                    placeholder="Enter your password"
                    onChange={event => setValue(prev => ({
                        ...prev, password: event.target.value
                    }))}
                />
                <div className='footer'>
                    <b className='error'>{messError}</b>
                    <button onClick={logInHandle}>Log in</button>
                    <p>Already have an account? <span><NavLink to="/signIn">Sign in</NavLink></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login