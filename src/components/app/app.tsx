import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Container from '../container/container';
import Header from '../header/header';
import TopBar from '../top-bar/top-bar';
import './app.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      
        <TopBar />
        <Header />
        <Container />
        
    </Router>
  ) 
}

export default App;