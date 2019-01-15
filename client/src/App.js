import React, { Component } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import ConsumerSignup from "./components/ConsumerSignup";
import VendorSignup from "./components/VendorSignup";
import CreateProduct from "./components/CreateProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VendorSignup />
        {/* <SignIn />
        <ConsumerSignup /> */}
        <CreateProduct />
      </div>
    );
  }
}

export default App;
