import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={ About } />
        <Route path="/users" component={ Users } />
        <ul>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </ul>
      </BrowserRouter>
    );
  }
}
