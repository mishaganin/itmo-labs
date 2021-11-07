import React, {useState} from 'react';
import axios from 'axios';

const RegisterDetails = () => {
    const [firstNameInputValue, setFirstNameInputValue] = useState('');
    const [middleNameInputValue, setMiddleNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const handleFirstNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFirstNameInputValue(e.target.value);
    }
    const handleMiddleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMiddleNameInputValue(e.target.value);
    }
    const handleLastNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLastNameInputValue(e.target.value);
    }
    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPasswordInputValue(e.target.value);
    }
    const handleSubmitForm = async (e: any) => {
        await axios.post("http://localhost:8080/profiles", {
            "firstName": {firstNameInputValue},
            "middleName": {middleNameInputValue},
            "lastName": {lastNameInputValue},
            "password": {passwordInputValue}
        })
    }
    return (
        <div className="register-details">
            <h1 className="container__title">Register</h1>
            <form className="register-details__form" onSubmit={handleSubmitForm}    >
                <div className="register-details__inputs">
                    <div className="register-details__inputs-firstname">
                        <input type="text" className="register-details__input" onChange={handleFirstNameInputChange} value={firstNameInputValue} required />
                    </div>
                    <div className="register-details__inputs-middlename">
                        <input type="text" className="register-details__input" onChange={handleMiddleNameInputChange} value={middleNameInputValue} required />
                    </div>
                    <div className="register-details__inputs-surname">
                        <input type="text" className="register-details__input" onChange={handleLastNameInputChange} value={lastNameInputValue} required />
                    </div>
                    <div className="register-details__inputs-password">
                        <input type="text" className="register-details__input" onChange={handlePasswordInputChange} value={passwordInputValue} required />
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterDetails;