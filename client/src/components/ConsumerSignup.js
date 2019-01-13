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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const newConsumer = this.state;
    API.getConsumers()
      .then(res => {
        res.data.map(consumer => (
          consumer.user_name === newConsumer.user_name ? alert("That user name is already in use. Please select something else.") : console.log("not a match")
        )
        )
      })
    !(newConsumer.user_name) || (!(newConsumer.email)) || (!(newConsumer.phone_number)) || (!(newConsumer.user_password)) || (!(newConsumer.person_name)) ?
      alert("You must fill in all fields to create a profile.") : console.log("good entry");

    API.postConsumer(newConsumer)
      .then(res => {
        console.log("Consumer saved! " + JSON.stringify(res.data));
        this.setState(
          {
            user_name: "",
            email: "",
            phone_number: "",
            user_password: "",
            person_name: ""
          }
        )
      })
      .catch(err => console.log("ERR--->>> src/components/ConsumerSignup.js line 34: " + err));
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
