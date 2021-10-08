import React, {useState} from 'react';
import { Route, Switch } from 'react-router';
import TaskPage from '../pages/task-page/task-page';
import LoginPage from '../pages/login-page/login-page';
import './container.scss';

const Container = () => {
    const [text, setText] = useState('Hello World');
    // ExtractFile();
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={TaskPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </div>
    )
}

export default Container;