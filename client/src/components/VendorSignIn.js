import React from "react";
// import "./style.css"


function VendorSignIn(props) {
  return (
    <div className="main">
      <h2>Vendor Sign In</h2>
      <a href="#">Or Sign Up</a>
      <div className="form-group">
        <form onSubmit={props.handleVendorFormSubmit}>
          <p className="form-label">User Name:</p>
          <input
            name="username"
            className="form-control"
            type="text"
            value={props.username}
            placeholder="username"
            onChange={props.handleChange}
          />
          <br />
          <p className="form-label">Password:</p>
          <input
            name="password"
            className="form-control"
            type="password"
            value={props.password}
            placeholder="password"
            onChange={props.handleChange}
          />
          <br />
            <button className="btn btn-success">Submit</button>
        </form>
        <br /><br />
        <p>
          Food Chain is a farm-to-table app to track how food travels from growers to consumers.

          </p>
      </div>
    </div>
  );
}

export default VendorSignIn;
