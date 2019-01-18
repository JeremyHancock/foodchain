import React, { Component } from "react";
import API from "../utils/api";

import ConsumerSignIn from "../components/ConsumerSignIn";
import VendorSignIn from "../components/VendorSignIn";
import ConsumerSignUp from "../components/ConsumerSignup";
import VendorSignUp from "../components/VendorSignup";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isVendor: false,
      isNew: false,
      user_name: "",
      user_password: "",
      email: "",
      phone_number: "",
      person_name: "",
      website: "",
      location: "",
      company_name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkVendorLogIn = this.checkVendorLogIn.bind(this);
    this.checkConsumerLogIn = this.checkConsumerLogIn.bind(this);
    this.handleConsumerFormSubmit = this.handleConsumerFormSubmit.bind(this);
    this.handleVendorFormSubmit = this.handleVendorFormSubmit.bind(this);
    this.isVendor = this.isVendor.bind(this);
    this.isNew = this.isNew.bind(this);
    this.handleNewVendorSubmit = this.handleNewVendorSubmit.bind(this);
    this.handleNewConsumerSubmit = this.handleNewConsumerSubmit.bind(this);
  }

  isVendor() {
    if (this.state.isVendor) {
      this.setState({ isVendor: false });
    } else {
      this.setState({ isVendor: true });
    }
  }
  isNew() {
    if (this.state.isNew) {
      this.setState({ isNew: false });
    } else {
      this.setState({ isNew: true });
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  checkConsumerLogIn(newLogin, consumer) {
    if (
      newLogin.user_name === consumer.user_name &&
      newLogin.user_password === consumer.user_password
    ) {
      this.setState({
        isLoggedIn: true,
        user_name: newLogin.user_name
      });
    }
  }
  handleConsumerFormSubmit(event) {
    event.preventDefault();
    const newLogin = this.state;
    API.getConsumers()
      .then(res => {
        res.data.map(consumer => this.checkConsumerLogIn(newLogin, consumer));
      })
      .then(res => {
        this.state.isLoggedIn
          ? (window.location.pathname = `/consumer/${this.state.user_name}`)
          : alert(
              "Username or password is incorrect. Please try again or sign up."
            );
      })
      .catch(err => console.log(err));
  }
  checkVendorLogIn(newLogin, vendor) {
    if (
      newLogin.user_name === vendor.user_name &&
      newLogin.user_password === vendor.user_password
    ) {
      this.setState({
        isLoggedIn: true,
        user_name: newLogin.user_name
      });
    }
  }
  handleVendorFormSubmit(event) {
    event.preventDefault();
    const newLogin = this.state;
    API.getVendors()
      .then(res => {
        res.data.map(vendor => this.checkVendorLogIn(newLogin, vendor));
      })
      .then(res => {
        this.state.isLoggedIn
          ? (window.location.pathname = `/vendor/${this.state.user_name}`)
          : alert(
              "Username or password is incorrect. Please try again or sign up."
            );
      })
      .catch(err => console.log(err));
  }
  handleNewVendorSubmit(event) {
    event.preventDefault();
    const newVendor = this.state;
    API.getVendors().then(res => {
      res.data.map(vendor =>
        vendor.user_name === newVendor.user_name
          ? alert(
              "That username is already in use. Please select something else."
            )
          : console.log("not a match")
      );
    });
    !newVendor.company_name ||
    !newVendor.email ||
    !newVendor.phone_number ||
    !newVendor.user_password ||
    !newVendor.location ||
    !newVendor.user_name
      ? alert("You must fill in all fields to create a profile.")
      : console.log("good entry");
    API.postVendor(newVendor)
      .then(res => {
        console.log("Vendor saved! " + JSON.stringify(res.data));
        window.location.pathname = `/vendor/${this.state.user_name}`;
      })
      .catch(err => console.log(err));
  }
  handleNewConsumerSubmit(event) {
    event.preventDefault();
    const newConsumer = this.state;
    API.getConsumers().then(res => {
      res.data.map(consumer =>
        consumer.user_name === newConsumer.user_name
          ? alert(
              "That user name is already in use. Please select something else."
            )
          : console.log("Unique!")
      );
    });
    !newConsumer.user_name ||
    !newConsumer.email ||
    !newConsumer.phone_number ||
    !newConsumer.user_password ||
    !newConsumer.person_name
      ? alert("You must fill in all fields to create a profile.")
      : console.log("All fields found!");

    API.postConsumer(newConsumer)
      .then(res => {
        console.log("Consumer saved! " + JSON.stringify(res.data));
        window.location.pathname = `/consumer/${this.state.user_name}`;
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <form>
            <h3>I am a{"  "}
              <input
                type="radio"
                name="isConsumer"
                value="consumer"
                checked={!this.state.isVendor}
                onChange={this.isVendor}
              /> Consumer{"  "}
              <input
                type="radio"
                name="isVendor"
                value="vendor"
                checked={this.state.isVendor}
                onChange={this.isVendor}
              /> Producer 
            </h3>
          </form>
        </div>
        {!this.state.isNew && this.state.isVendor ? (
          <VendorSignIn
            {...this.state}
            handleChange={this.handleChange}
            handleVendorFormSubmit={this.handleVendorFormSubmit}
            isVendor={this.isVendor}
            isNew={this.isNew}
          />
        ) : null}

        {!this.state.isNew && !this.state.isVendor ? (
          <ConsumerSignIn
            {...this.state}
            handleChange={this.handleChange}
            handleConsumerFormSubmit={this.handleConsumerFormSubmit}
            isVendor={this.isVendor}
            isNew={this.isNew}
          />
        ) : null}
        {this.state.isNew && !this.state.isVendor ? (
          <ConsumerSignUp
            {...this.state}
            handleChange={this.handleChange}
            handleNewConsumerSubmit={this.handleNewConsumerSubmit}
            isVendor={this.isVendor}
            isNew={this.isNew}
          />
        ) : null}
        {this.state.isNew && this.state.isVendor ? (
          <VendorSignUp
            {...this.state}
            handleChange={this.handleChange}
            handleNewVendorSubmit={this.handleNewVendorSubmit}
            isVendor={this.isVendor}
            isNew={this.isNew}
          />
        ) : null}
      </div>
    );
  }
}
export default SignInPage;
