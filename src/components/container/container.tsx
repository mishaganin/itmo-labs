// @ts-nocheck

import { Route, Switch } from 'react-router';
import TaskPage from '../pages/task-page/task-page';
import LoginPage from '../pages/login-page/login-page';
import './container.scss';
import RegisterPage from '../pages/register-page/register-page';

const Container = (isLoggedIn: boolean, onLogin: Function) => {
    // ExtractFile();
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={TaskPage} />
                <Route path="/login" render={() => (
                    <LoginPage 
                        isLoggedIn={isLoggedIn}
                        onLogin={onLogin}
                    />)}/>
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </div>
    )
}

export default Container;