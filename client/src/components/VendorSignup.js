import React from "react";
// import "./style.css"

function VendorSignup (props) {

    return (
      <div className="main">
        <h1>Vendor Signup</h1>
        <p onClick={props.isNew}>Or Sign In</p>
        <div className="form-group">
          <form onSubmit={props.handleNewVendorSubmit}>
            <p className="form-label">Company Name:</p>
            <input
              name="company_name"
              className="form-control"
              type="text"
              value={props.company_name}
              placeholder="Good Business, Inc."
              onChange={props.handleChange}
            />
            <br />
            <p className="form-label">Location:</p>
            <input
              name="location"
              className="form-control"
              type="text"
              value={props.location}
              placeholder="City, State/Province, Country"
              onChange={props.handleChange}
            />
            <br />
            <p className="form-label">Email:</p>
            <input
              name="email"
              className="form-control"
              type="text"
              value={props.email}
              placeholder="me@goodbusiness.com"
              onChange={props.handleChange}
            />
            <br />
            <p className="form-label">Phone Number:</p>
            <input
              name="phone_number"
              className="form-control"
              type="text"
              value={props.phone_number}
              placeholder="789-123-4560"
              onChange={props.handleChange}
            />
            <br />
            <p className="form-label">Website:</p>
            <input
              name="website"
              className="form-control"
              type="text"
              value={props.website}
              placeholder="www.goodbusiness.com"
              onChange={props.handleChange}
            />
            <br />
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
            <button className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    );
  }

export default VendorSignup;
