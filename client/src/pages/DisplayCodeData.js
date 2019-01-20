import React, { Component } from "react";
import API from "../utils/api";

const url = window.location.href;
const urlChunks = url.split("/");
const urlPieces = urlChunks[4] ? urlChunks[4].split("sirlinksalot") : [];
// console.log(urlPieces)
// let linkLocations = [];
// let linkCreatedAt = [];
// let linkNotes = [];
// let companyNames = [];
// let vendorLocations = [];
// let vendorNotes = [];
// let websites = [];
let vendorData = [];
let linkData = [];

class DisplayCodeDataPage extends Component {
    constructor() {
        super();
        this.state = {
            product_name: "",
            chemicals_used: "",
            harvest_date: "",
            product_createdAt: "",
            certified_organic: false,
            company_names: [],
            vendor_locations: [],
            vendor_notes: [],
            link_locations: [],
            link_createdAt: [],
            link_notes: [],
            websites: [],
            code_data: urlPieces[0],
            product_id: urlPieces[1],
            link_id: urlPieces.slice(2),

        };
        this.getProductInfo = this.getProductInfo.bind(this);
        this.getLinkInfo = this.getLinkInfo.bind(this);
        this.getVendorInfo = this.getVendorInfo.bind(this);
    }
    componentDidMount() {
        this.getLinkInfo();
    };
    getLinkInfo() {
        let linkInfo = [];
        const links = this.state.link_id;
        links.forEach(link =>
            API.getLink(link)
                .then(res => {
                    if (res.data) {
                        linkInfo.push(res.data);
                        // console.log(linkInfo);
                        this.getVendorInfo(linkInfo);
                    }
                })
        )
    }
    getVendorInfo(input) {
        const vendors = input;
        vendors.forEach(vendor =>
            API.getVendorById(vendor.vendor_id)
                .then(res => {
                    if (res.data) {
                        // console.log("This is each result (looped) for getVendorInfo: " + JSON.stringify(res.data));
                        const getVendorResults = {
                            linkInfo: input,
                            vendorInfo: res.data
                        }
                        this.getProductInfo(getVendorResults)
                    }
                })
        )
    };
    getProductInfo(input) {
        const productData = [];
        API.getProduct(this.state.product_id)
            .then(res => {
                if (res.data) {
                    productData.push(res.data);
                    console.log("Product Data: " + JSON.stringify(productData));
                    linkData.push(input.linkInfo);
                    console.log("Link Data: " + JSON.stringify(linkData));
                    vendorData.push(input.vendorInfo);
                    console.log("Vendor Data: " + JSON.stringify(vendorData));
                }
            })
            .then(() => {
                this.setState({
                    product_name: productData[0].product_name,
                    harvest_date: productData[0].harvest_date,
                    chemicals_used: productData[0].chemicals_used,
                    certified_organic: productData[0].certified_organic,
                    vendor_notes: productData[0].vendor_notes,
                    product_createdAt: productData[0].createdAt,
                    link_locations: linkData[0].location,
                    link_createdAt: linkData[0].createdAt,
                    link_notes: linkData,
                    company_names: vendorData[0].company_name,
                    websites: vendorData[0].website,
                    vendor_locations: vendorData[0].location
                })
                console.log(this.state);
            })
    }

    render() {
        return (
            <div>
                {/* {this.state && this.state.linkOneVendor && */}
                    <div>
                        <p>{`This ${this.state.product_name} started out at ${this.state.company_names} 
                in ${this.state.vendor_locations}. They wanted us to tell you this: "${this.state.vendor_notes}". `}
                </p>
                <p>{`It was harvested on ${this.state.harvest_date} 
                and then travelled to {this.state.linkOneVendor.company_name} in {this.state.linkOneVendor.location} on {this.state.linkOneVendor.createdAt}.`}</p>
                <p>{`From there it arrived at {this.state.linkTwoVendor.company_name} in {this.state.linkTwoVendor.location} on {this.linkThreeVendor.createdAt}.`}</p>
                <p>{`From there it arrived at {this.state.linkThreeVendor.company_name} in {this.state.linkThreeVendor.location} on {this.state.linkThreeVendor.createdAt}.`}</p>
                <p>{`And now, this ${this.state.product_name} is here with you! It says, "hi".`}</p>
                        <ul>
                            <li>{`Product Name: ${this.state.product_name}`}</li>
                            <li>{`Harvest Date: ${this.state.harvest_date}`}</li>
                            <li>{`Created At: ${this.state.product_createdAt}`}</li>
                            <li>{`Grower: ${this.state.company_names}`}</li>
                            <li>{`Organic: ${this.state.certified_organic}`}</li>
                            <li>{`Chemicals: ${this.state.chemicals_used}`}</li>
                            <li>{`Notes: ${this.state.vendor_notes}`}</li>
                            {/* {this.state.link_id.map(linkItem => (
                                <li>{`Link created at: ${linkItem.createdAt}`}</li>
                            ))}
                            {this.state.vendor_id.map(vendorItem => (
                                <div>
                                    <li>{`by vendor number: ${vendorItem.company_name}`}</li>
                                    <li>{`vendor location: ${vendorItem.location}`}</li>
                                    <li>{`vendor website: ${vendorItem.website}`}</li>
                                </div>
                            ))} */}

                        </ul>
                    </div>
                    {/* } */}
            </div >
        );
    };
};
export default DisplayCodeDataPage;