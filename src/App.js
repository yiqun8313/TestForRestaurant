import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './Home';
import CategoryPage from './Category';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  toPage = path => {
    this.props.history.push(`/${path}`);
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>1. Welcome to Chef Chu's Restaurant</header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={CategoryPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
