import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import ConsumerPage from "./pages/Consumer";
import VendorPage from "./pages/Vendor";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Router>
            <Switch>
              <Route exact path="/" component={SignInPage} />
              <Route path="/consumer" component={ConsumerPage} />
              <Route path="/vendor" component={VendorPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
