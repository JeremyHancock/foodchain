import React, { Component } from "react";
// import "./style.css"


function SignIn(props) {
  return (
    <div className="main">
      <h2>Customer Sign In</h2>
      <a href="#">Or Sign Up</a>
      <div className="form-group">
        <form onSubmit={props.handleConsumerFormSubmit}>
          <p className="form-label">User Name:</p>
          <input
            name="cust_username"
            className="form-control"
            type="text"
            value={props.cust_username}
            placeholder="username"
            onChange={props.handleChange}
          />
          <br />
          <p className="form-label">Password:</p>
          <input
            name="cust_password"
            className="form-control"
            type="password"
            value={props.cust_password}
            placeholder="password"
            onChange={props.handleChange}
          />
          <br />
            <button className="btn btn-success">Submit</button>
        </form>
      </div>
      <br />
      <h2>Vendor Sign In</h2>
      <a href="#">Or Sign Up</a>
      <div className="form-group">
        <form onSubmit={props.handleVendorFormSubmit}>
          <p className="form-label">User Name:</p>
          <input
            name="vendor_username"
            className="form-control"
            type="text"
            value={props.vendor_username}
            placeholder="username"
            onChange={props.handleChange}
          />
          <br />
          <p className="form-label">Password:</p>
          <input
            name="vendor_password"
            className="form-control"
            type="password"
            value={props.vendor_password}
            placeholder="password"
            onChange={props.handleChange}
          />
          <br />
            <button type="button" className="btn btn-success">Submit</button>
        </form>
        <br /><br />
        <p>
          Food Chain is a farm-to-table app to track how food travels from growers to consumers.

          </p>
      </div>
    </div>
  );
}

export default SignIn;
