import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Container from '../container/container';
import Header from '../header/header';
import TopBar from '../top-bar/top-bar';
import './app.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Container />
    </BrowserRouter>
  ) 
}

export default App;