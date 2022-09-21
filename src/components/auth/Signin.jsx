import React from 'react'
// import { signInWithGoogle } from './authenticate'
import { NavLink, useNavigate } from 'react-router-dom'
import InputControl from './InputControl'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
import { auth } from '../config/Config'

const Signin = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [messError, setMessError] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(false)
    const navigate = useNavigate();

    const submitHandle = () => {
        if (!value.name || !value.email || !value.password) {
            setMessError("Please fill in the above fields.")
            return;
        }
        setMessError('');
        setSubmitDisabled(true)
        // console.log(value);
        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then(async (res) => {
                const user = res.user
                setSubmitDisabled(false)
                await updateProfile(user, {
                    displayName: value.name
                })
                navigate("/")
            })
            .catch((error) => {
                setMessError(error.message);
                setSubmitDisabled(false)
            })
    }

    return (
        <div className='login-container'>
            {/* <a onClick={signInWithGoogle} >Sign in</a> */}
            <div className='login-innerBox'>
                <h1>Sign in</h1>
                <InputControl
                    label="Your name"
                    placeholder="Enter your name"
                    onChange={event => setValue(prev => ({ ...prev, name: event.target.value }))}
                />
                <InputControl
                    label="Email"
                    placeholder="Enter your email"
                    onChange={event => setValue(prev => ({ ...prev, email: event.target.value }))}
                />
                <InputControl
                    label="Password"
                    placeholder="Enter your password"
                    onChange={event => setValue(prev => ({ ...prev, password: event.target.value }))}
                />
                <div className='footer'>
                    <b className='error'>{messError}</b>
                    <button onClick={submitHandle} disabled={submitDisabled}>Sign in</button>
                    <p>Already have an account?
                        <span><NavLink to="/logIn">Log in</NavLink></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signin