import React, { Component } from "react";
import API from "../utils/api";
// import "./style.css"

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      cust_username: "",
      cust_password: "",
      vendor_username: "",
      vendor_password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleVendorFormSubmit = this.handleVendorFormSubmit.bind(this);
    this.handleConsumerFormSubmit = this.handleConsumerFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleConsumerFormSubmit(event) {
    event.preventDefault();
    const newLogin = this.state;
    API.getConsumers()
      .then(res => {
        res.data.map(consumer => (
          newLogin.cust_username === consumer.user_name && newLogin.cust_password === consumer.user_password ?
            this.setState(
              {
                isLoggedIn: true,
                cust_username: "",
                cust_password: "",
                vendor_username: "",
                vendor_password: ""
              })
            : alert("Username or password is incorrect. Please try again or sign up.")
        ));
      });
  };

  handleVendorFormSubmit(event) {
    event.preventDefault();
    const newLogin = this.state;
    API.getVendors()
      .then(res => {
        res.data.map(vendor => (
          newLogin.vendor_username === vendor.user_name
            &&
            newLogin.vendor_password === vendor.user_password ?
            this.setState(
              {
                isLoggedIn: true,
                cust_username: "",
                cust_password: "",
                vendor_username: "",
                vendor_password: ""
              })
            : alert("Username or password is incorrect. Please try again or sign up.\n username from db: " + vendor.user_name + "password from db: " + vendor.user_password)
        ));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main">
        <h2>Customer Sign In</h2>
        <a href="#">Or Sign Up</a>
        <div className="form-group">
          <form onSubmit={this.handleConsumerFormSubmit}>
            <p className="form-label">User Name:</p>
            <input
              name="cust_username"
              className="form-control"
              type="text"
              value={this.state.cust_username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Password:</p>
            <input
              name="cust_password"
              className="form-control"
              type="password"
              value={this.state.cust_password}
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
          <form onSubmit={this.handleVendorFormSubmit}>
            <p className="form-label">User Name:</p>
            <input
              name="vendor_username"
              className="form-control"
              type="text"
              value={this.state.vendor_username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Password:</p>
            <input
              name="vendor_password"
              className="form-control"
              type="password"
              value={this.state.vendor_password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-dark">Submit</button>
          </form>
          <br /><br />
          <p>
            Food Chain is a farm-to-table app to track how food travels from growers to consumers.
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
