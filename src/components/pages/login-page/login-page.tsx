// @ts-nocheck

import LoginDetails from '../../login-details/login-details';

const LoginPage = (isLoggedIn: boolean, onLogin: Function) => {
    return (
        <LoginDetails 
            isLoggedIn={isLoggedIn}
            onLogin={onLogin}
        />
    )
}

export default LoginPage;