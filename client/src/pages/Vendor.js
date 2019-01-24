import React, { Component } from "react";
import CreateProduct from "../components/CreateProduct";
import CreateLink from "../components/CreateLink";
import API from "../utils/api";

const url = window.location.href;
const urlPieces = url.split("/");
const usernameFromUrl = urlPieces[4];
let reset = window.location.pathname

class VendorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'Add a new product',
            newProduct: false,
            newScan: true,
            vendor_id: "",
            code_value: "cvl",
            company_name: "",
            location: "",
            website: "",
            product_id: ""
        }
        this.windowReset = this.windowReset.bind(this);
        this.isProduct = this.isProduct.bind(this);
        this.getVendor = this.getVendor.bind(this);
    }

    componentDidMount() {
        this.getVendor();
    }

    getVendor() {
        API.getVendor(usernameFromUrl)
            .then(res => {
                this.setState({
                    company_name: res.data.company_name,
                    location: res.data.location,
                    website: res.data.website,
                    vendor_id: res.data.id
                });
                console.log(this.state);
            })
    }
    isProduct() {
        if (this.state.newProduct) {
            this.setState({
                newProduct: false,
                newScan: true,
                result: 'Scan a code'
            });
        } else {
            this.setState({
                newProduct: true,
                newScan: false,
                result: 'Add a new product'
            });
        }
    }
    windowReset = () => { window.location.pathname = reset }

    render() {
        return (
            <div>
                {/* <button className="btn btn-success" onClick={this.isProduct}>{this.state.result}</button> */}
                {!this.state.newProduct ?
                    <CreateLink
                        vendor_id={this.state.vendor_id}
                        company_name={this.state.company_name}
                        location={this.state.location}
                        website={this.state.website}
                        code_value={this.state.code_value}
                        product_id={this.state.product_id}
                        isProduct={this.isProduct}
                        windowReset={this.windowReset}
                    />
                    :
                    <CreateProduct
                        vendor_id={this.state.vendor_id}
                        code_value={this.state.code_value}
                        isProduct={this.isProduct}
                        windowReset={this.windowReset}
                    />
                }
            </div>
        );
    }
}
export default VendorPage;
