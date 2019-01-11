import React, { Component } from 'react';
import './App.css';
import ConsumerSignup from './components/ConsumerSignup';
import VendorSignup from './components/VendorSignup';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ConsumerSignup /> */}
        <VendorSignup />
      </div>
    );
  }
}

export default App;
