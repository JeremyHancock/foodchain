import React, { Component } from "react";
import API from "../utils/api";
// import "./style.css"

class VendorSignup extends Component {
  constructor() {
    super();
    this.state = {
      company_name: "",
      email: "",
      phone_number: "",
      website: "",
      location: "",
      user_name: "",
      user_password: ""
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
    !(newVendor.user_name) || (!(newVendor.email)) || (!(newVendor.phone_number)) || (!(newVendor.user_password)) || (!(newVendor.person_name)) ? 
    alert("You must fill in all fields to create a profile.") : console.log("good entry");

    API.postVendor(newVendor)
      .then(res => {
        console.log("Vendor saved! " + res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main">
        <h1>Vendor Signup</h1>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            <p className="form-label">Company Name:</p>
            <input
              name="company_name"
              className="form-control"
              type="text"
              value={this.state.company_name}
              placeholder="Good Business, Inc."
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Location:</p>
            <input
              name="location"
              className="form-control"
              type="text"
              value={this.state.location}
              placeholder="City, State/Province, Country"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Email:</p>
            <input
              name="email"
              className="form-control"
              type="text"
              value={this.state.email}
              placeholder="me@goodbusiness.com"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Phone Number:</p>
            <input
              name="phone_number"
              className="form-control"
              type="text"
              value={this.state.phone_number}
              placeholder="789-123-4560"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Website:</p>
            <input
              name="website"
              className="form-control"
              type="text"
              value={this.state.website}
              placeholder="www.goodbusiness.com"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">User Name:</p>
            <input
              name="user_name"
              className="form-control"
              type="text"
              value={this.state.user_name}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Password:</p>
            <input
              name="user_password"
              className="form-control"
              type="password"
              value={this.state.user_password}
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
