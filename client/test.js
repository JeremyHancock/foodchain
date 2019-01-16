handleVendorFormSubmit() {
    event.preventDefault();
    const newLogin = this.state;
    API.getVendors()
        .then(res => {
            res.data.map(vendor => (
                newLogin.vendor_username === vendor.user_name
                    &&
                    newLogin.vendor_password === vendor.user_password ?
                    this.setState({
                            isLoggedIn: true,
                            vendor_username: newLogin.vendor_username,
                        })
                    :
                    console.log("Failed to login!")
            ));
            console.log("Line 72: " + this.state.isLoggedIn);

            this.state.isLoggedIn ? window.location.pathname = `/vendor/${this.state.vendor_username}` : alert("Username or password is incorrect. Please try again or sign up.")
        })
        .catch(err => console.log(err));
};

if(newLogin.vendor_username === vendor.user_name && newLogin.vendor_password === vendor.user_password) {
    this.setState({
        isLoggedIn: true,
        vendor_username: newLogin.vendor_username,
    })
}
else {
    console.log("Failed to login!")
}

