import React, { Component } from "react";
// import "./style.css"

class ConsumerSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div class="main">
        <h1>Customer Signup</h1>
        <div class="form-group">
          <form>
            <p class='form-label'>Name:</p>
            <input
              name="name"
              class="form-control"
              type="text"
              value={this.state.name}
              placeholder="First Lasterson"
              onChange={this.handleChange}
            />
            <br />
            <p class='form-label'>Email:</p>
            <input
              name="email"
              class="form-control"
              type="text"
              value={this.state.email}
              placeholder="me@me.com"
              onChange={this.handleChange}
            />
            <br />
            <p class='form-label'>Mobile:</p>
            <input
              name="mobile"
              class="form-control"
              type="text"
              value={this.state.mobile}
              placeholder="789-123-4560"
              onChange={this.handleChange}
            />
            <br />
            <p class='form-label'>User Name:</p>
            <input
              name="username"
              class='form-control'
              type='text'
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <br />
            <p class='form-label'>Password:</p>
            <input
              name="password"
              class='form-control'
              type='password'
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </form>
          <br />
          <button class='btn btn-dark'>Submit</button>
        </div>
      </div>
    );
  }
}

export default ConsumerSignup;
