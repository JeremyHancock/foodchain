import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import ConsumerSignup from './components/ConsumerSignup';
import VendorSignup from './components/VendorSignup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignIn />
        {/* <ConsumerSignup /> */}
        {/* <VendorSignup /> */}
      </div>
    );
  }
}

export default App;
