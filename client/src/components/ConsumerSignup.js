import React from "react";

// import "./style.css"

function ConsumerSignup(props) {

    return (
      <div className="main">
        <h1>Customer Signup</h1>
        <p onClick={props.isNew}>Or Sign In</p>
        <div className="form-group">
          <form onSubmit={props.handleNewConsumerSubmit}>
            <p className="form-label">Name:</p>
            <input
              name="person_name"
              className="form-control"
              type="text"
              value={props.person_name}
              placeholder="First Lasterson"
              onChange={props.handleChange}
            />
            <br />
            <p className="form-label">Email:</p>
            <input
              name="email"
              className="form-control"
              type="text"
              value={props.email}
              placeholder="me@me.com"
              onChange={props.handleChange}
            />
            <br />
            <p className="form-label">Mobile:</p>
            <input
              name="phone_number"
              className="form-control"
              type="text"
              value={props.phone_number}
              placeholder="789-123-4560"
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

export default ConsumerSignup;
