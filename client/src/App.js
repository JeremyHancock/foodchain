import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import ConsumerSignup from './components/ConsumerSignup';
import VendorSignup from './components/VendorSignup';
import QRMaker from './components/QRMaker';
import QRReader from './components/QRReader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <QRReader />
        <QRMaker />
        <VendorSignup />
        <SignIn />
        <ConsumerSignup />
      </div>
    );
  }
}

export default App;
