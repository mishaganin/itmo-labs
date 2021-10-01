import React, { Component } from 'react';
import Container from '../container/container';
import Header from '../header/header';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    )
  }
}
