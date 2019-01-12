import React, { Component } from "react";
// import "./style.css"

class VendorSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      email: "",
      mobile: "",
      username: "",
      password: ""
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
    const newVendor = this.state;
    console.log(newVendor);
  }

  render() {
    return (
      <div className="main">
        <h1>Vendor Signup</h1>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            <p className="form-label">Name:</p>
            <input
              name="name"
              className="form-control"
              type="text"
              value={this.state.name}
              placeholder="First Lasterson"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Company:</p>
            <input
              name="company"
              className="form-control"
              type="text"
              value={this.state.company}
              placeholder="Company Name"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Email:</p>
            <input
              name="email"
              className="form-control"
              type="text"
              value={this.state.email}
              placeholder="me@me.com"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Mobile:</p>
            <input
              name="mobile"
              className="form-control"
              type="text"
              value={this.state.mobile}
              placeholder="789-123-4560"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">User Name:</p>
            <input
              name="username"
              className="form-control"
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Password:</p>
            <input
              name="password"
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
      </div>
    );
  }
}

export default VendorSignup;
