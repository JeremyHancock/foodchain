import React, { Component } from "react";
import API from "../utils/api";

import ConsumerSignIn from "../components/ConsumerSignIn";
import VendorSignIn from "../components/VendorSignIn";

// import ConsumerSignUp from "../components/ConsumerSignup";
// import VendorSignUp from "../components/VendorSignup";

class SignInPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            isVendor: false,
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.checkVendorLogIn = this.checkVendorLogIn.bind(this);
        this.checkConsumerLogIn = this.checkConsumerLogIn.bind(this);
        this.handleConsumerFormSubmit = this.handleConsumerFormSubmit.bind(this);
        this.handleVendorFormSubmit = this.handleVendorFormSubmit.bind(this);
        this.whichForm = this.whichForm.bind(this);
    }
    whichForm(event) {
        console.log(this.state.isVendor)
        if (this.state.isVendor) {
            this.setState({
                isVendor: false
            })
        }
        else {
            this.setState({
                isVendor: true
            })
        }
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    checkConsumerLogIn(newLogin, consumer) {
        if (newLogin.username === consumer.user_name && newLogin.password === consumer.user_password) {
            this.setState({
                isLoggedIn: true,
                username: newLogin.username,
            })
        }
    }
    handleConsumerFormSubmit(event) {
        event.preventDefault();
        const newLogin = this.state;
        API.getConsumers()
            .then(res => {
                res.data.map(consumer => (
                    this.checkConsumerLogIn(newLogin, consumer)
                ))
            })
            .then(res => {
                this.state.isLoggedIn ?
                    window.location.pathname = `/consumer/${this.state.username}`
                    : alert("Username or password is incorrect. Please try again or sign up.")

            })
            .catch(err => console.log(err));

    };
    checkVendorLogIn(newLogin, vendor) {
        if (newLogin.username === vendor.user_name && newLogin.password === vendor.user_password) {
            this.setState({
                isLoggedIn: true,
                vendor_username: newLogin.username,
            })
        }
    }
    handleVendorFormSubmit(event) {
        event.preventDefault();
        const newLogin = this.state;
        API.getVendors()
            .then(res => {
                res.data.map(vendor => (
                    this.checkVendorLogIn(newLogin, vendor)
                ))
            })
            .then(res => {
                this.state.isLoggedIn ?
                    window.location.pathname = `/vendor/${this.state.username}`
                    : alert("Username or password is incorrect. Please try again or sign up.")

            })
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <form>
                        <p className="form-label">Are you a produce/vendor?</p>
                        <input
                            name="isVendor"
                            className="form-control"
                            type="radio"
                            onClick={this.whichForm}
                        />
                    </form>
                </div>
                {this.state.isVendor ?
                    <VendorSignIn
                        {...this.state}
                        handleChange={this.handleChange}
                        handleVendorFormSubmit={this.handleVendorFormSubmit}
                    />
                    :
                    <ConsumerSignIn
                        {...this.state}
                        handleChange={this.handleChange}
                        handleConsumerFormSubmit={this.handleConsumerFormSubmit}
                    />
                }
            </div>
        );
    }
}
export default SignInPage;
