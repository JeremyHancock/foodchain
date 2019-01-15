import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignInPage from './pages/SignIn';
import ConsumerPage from './pages/Consumer';
import VendorPage from './pages/Vendor'; 
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={SignInPage} />
            <Route exact path="/consumer" component={ConsumerPage} />
            <Route exact path="/vendor" component={VendorPage} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}

export default App;