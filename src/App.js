import './App.css';
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
        <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good morning" />  } />
        <ul>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/users/10">Users</Link>
        </ul>
      </BrowserRouter>
    );
  }
}
