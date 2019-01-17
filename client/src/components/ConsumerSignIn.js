import React from "react";
// import "./style.css"


function ConsumerSignIn(props) {
  return (
    <div>
      <h2>Customer Sign In</h2>
      <p onClick={props.isNew}>Or Sign Up</p>
      <div className="form-group">
        <form onSubmit={props.handleConsumerFormSubmit}>
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
        </form>
      </div>
      <br /><br />
      <p>
        Food Chain is a farm-to-table app to track how food travels from growers to consumers.
      </p>
    </div >
  );
}

export default ConsumerSignIn;
