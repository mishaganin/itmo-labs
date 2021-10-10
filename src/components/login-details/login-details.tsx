import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginDetails = () => {
    const [loginInputValue, setLoginInputValue] = useState<string>('')
    const [passwordInputValue, setPasswordInputValue] = useState<string>('')
    const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setLoginInputValue(e.target.value)
    }
    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPasswordInputValue(e.target.value)
    }
    const handleSubmitForm = (e: any) => {
        e.preventDefault()
        axios.post('http://localhost:8080/profiles', {
            "login": {loginInputValue},
            "password": {passwordInputValue}
        })
        console.log('HEEEEEEEEEEEEEY wowowo')
    }
    return (
        <div className="login-details">
            <h1 className="container__title">Login</h1>
            <form className="login-details__form" onSubmit={handleSubmitForm}>
                <div className="login-details__inputs">
                    <div className="login-details__inputs-login">
                        <input type="text" className="login-details__input" onChange={handleLoginInputChange} value={loginInputValue} required/>
                    </div>
                    <div className="login-details__inputs-password">
                        <input type="text" className="login-details__input" onChange={handlePasswordInputChange} value={passwordInputValue} required/>
                    </div>
                </div>
                <button type="submit">Login</button>
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default LoginDetails;