import React, { Component } from 'react';
import Container from '../container/container';
import Header from '../header/header';
import TopBar from '../top-bar/top-bar';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <Container />
      </div>
    )
  }
}
