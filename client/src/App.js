import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import DisplayCodeDataPage from "./pages/DisplayCodeData";
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
        <Router>
          <div className="main">
            <Switch>
              <Route exact path="/" component={SignInPage} />
              <Route path="/consumer" component={ConsumerPage} />
              <Route path="/scan" component={DisplayCodeDataPage} />
              <Route path="/vendor" component={VendorPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
