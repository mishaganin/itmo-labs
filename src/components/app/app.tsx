// @ts-nocheck

import React, { useState } from 'react';
import { LoginContext } from '../login-context/login-context';
import { BrowserRouter } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import Container from '../container/container';
import Header from '../header/header';
import TopBar from '../top-bar/top-bar';
import './app.scss';

// const history = createBrowserHistory();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const onLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <LoginContext.Provider value={isLoggedIn}>
      <BrowserRouter>
        <TopBar />
        <Header />
        <Container 
          isLoggedIn={isLoggedIn}
          onLogin={onLogin}
        />
      </BrowserRouter>
    </LoginContext.Provider>
  ) 
}

export default App;