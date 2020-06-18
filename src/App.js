import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navBar';
import Books from './components/books';
import Purchase from './components/purchase';
import Novel from './components/novel';
import Autobiography from './components/autobiography';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import Poetry from './components/poetry';
import Horror from './components/horror';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/books" component={Books} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/novel" component={Novel} />
            <Route path="/poetry" component={Poetry} />
            <Route path="/horror" component={Horror} />
            <Route path="/autobiography" component={Autobiography} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/books" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
