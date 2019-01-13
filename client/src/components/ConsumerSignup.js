import React, { Component } from "react";
import API from "../utils/api";

// import "./style.css"

class ConsumerSignup extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      email: "",
      phone_number: "",
      user_password: "",
      person_name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // postConsumer = id => {
  //   API.postConsumer(id)
  //     .then(res => {
  //       console.log("Consumer saved! " + res);
  //     })
  //     .catch(err => console.log(err));
  // };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const newConsumer = this.state;
    API.postConsumer(newConsumer)
      .then(res => {
        console.log("Consumer saved! " + res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main">
        <h1>Customer Signup</h1>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            <p className="form-label">Name:</p>
            <input
              name="person_name"
              className="form-control"
              type="text"
              value={this.state.person_name}
              placeholder="First Lasterson"
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
              name="phone_number"
              className="form-control"
              type="text"
              value={this.state.phone_number}
              placeholder="789-123-4560"
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

export default ConsumerSignup;
