import React, { Component } from "react";
// import "./style.css"

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newCustomer = this.state;
    console.log(newCustomer);
  }

  render() {
    return (
      <div className="main">
        <h2>Customer Sign In</h2>
        <a href="#">Or Sign Up</a>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            <p className="form-label">User Name:</p>
            <input
              name="cust-username"
              className="form-control"
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Password:</p>
            <input
              name="cust-password"
              className="form-control"
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-dark">Submit</button>
          </form>
        </div>
        <br />
        <h2>Vendor Sign In</h2>
        <a href="#">Or Sign Up</a>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            <p className="form-label">User Name:</p>
            <input
              name="vendor-username"
              className="form-control"
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Password:</p>
            <input
              name="vendor-password"
              className="form-control"
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-dark">Submit</button>
          </form>
          <br /><br />
          <p>
            Food Chain is a farm-to-table app to track how far local food travels from growers to consumers.
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
