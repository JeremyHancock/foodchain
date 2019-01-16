import React, { Component } from "react";
import API from "../utils/api";

import SignIn from "../components/SignIn";
import ConsumerSignUp from "../components/ConsumerSignup";
import VendorSignUp from "../components/VendorSignup";

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isVendor: false,
            isConsumer: false,
            cust_username: "",
            cust_password: "",
            vendor_username: "",
            vendor_password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.checkVendorLogIn = this.checkVendorLogIn.bind(this);
        this.checkConsumerLogIn = this.checkConsumerLogIn.bind(this);
        this.handleConsumerFormSubmit = this.handleConsumerFormSubmit.bind(this);
        this.handleVendorFormSubmit = this.handleVendorFormSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    checkConsumerLogIn(newLogin, consumer) {
        if (newLogin.cust_username === consumer.user_name && newLogin.cust_password === consumer.user_password) {
            this.setState({
                isLoggedIn: true,
                cust_username: newLogin.cust_username,
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
                    window.location.pathname = `/consumer/${this.state.consumer_username}`
                    : alert("Username or password is incorrect. Please try again or sign up.")

            })
            .catch(err => console.log(err));

    };
    checkVendorLogIn(newLogin, vendor) {
        if (newLogin.vendor_username === vendor.user_name && newLogin.vendor_password === vendor.user_password) {
            this.setState({
                isLoggedIn: true,
                vendor_username: newLogin.vendor_username,
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
                    window.location.pathname = `/vendor/${this.state.vendor_username}`
                    : alert("Username or password is incorrect. Please try again or sign up.")

            })
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div>

                <SignIn
                    {...this.state}
                    handleChange={this.handleChange}
                    handleConsumerFormSubmit={this.handleConsumerFormSubmit}
                    handleVendorFormSubmit={this.handleVendorFormSubmit}
                />
            </div>
        );
    }
}
export default SignInPage;
