import React from "react";
// import "./style.css"


function VendorSignIn(props) {
  return (
    <div>
      <h2 className="pointer" >Vendor Sign In</h2>
      <p className="pointer" onClick={props.isNew}>Or Sign Up</p>
      <div className="form-group">
        <form onSubmit={props.handleVendorFormSubmit}>
          <p className="form-label">User Name:</p>
          <input
            name="user_name"
            className="form-control"
            type="text"
            value={props.user_name}
            placeholder="username"
            onChange={props.handleChange}
          />
          <br />
          <p className="form-label">Password:</p>
          <input
            name="user_password"
            className="form-control"
            type="password"
            value={props.user_password}
            placeholder="password"
            onChange={props.handleChange}
          />
          <br />
            <button className="btn btn-success">Submit</button>
            <br></br>

        </form>
      </div>
    </div>
  );
}

export default VendorSignIn;
