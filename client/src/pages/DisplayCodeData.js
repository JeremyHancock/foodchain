import React, { Component } from "react";
import API from "../utils/api";

const url = window.location.href;
const urlChunks = url.split("/");
const urlPieces = urlChunks[4] ? urlChunks[4].split("sirlinksalot") : [];
let numberOfLinks = urlPieces.length - 2;

let linkLocations = [];
let linkCreatedAt = [];
let linkNotes = [];
let companyNames = [];
let vendorLocations = [];
let websites = [];
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
                    // console.log("Product Data: " + JSON.stringify(productData));
                    linkData.push(input.linkInfo);
                    // console.log("Link Data: " + JSON.stringify(linkData));
                    vendorData.push(input.vendorInfo);
                    // console.log("Vendor Data: " + JSON.stringify(vendorData));
                    let i;
                    for (i = numberOfLinks - 1; i > -1; i--) {
                        // console.log(i);
                        linkLocations.push(linkData[0][i].location);
                        linkCreatedAt.push(linkData[0][i].createdAt);
                        linkNotes.push(linkData[0][i].notes);
                        if (vendorData[i]) {
                            companyNames.push(vendorData[i].company_name);
                            vendorLocations.push(vendorData[i].location);
                            websites.push(vendorData[i].website);
                        };
                    }
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
                    link_locations: linkLocations,
                    link_createdAt: linkCreatedAt,
                    // link_notes: linkNotes,
                    company_names: companyNames,
                    websites: websites,
                    vendor_locations: vendorLocations
                })
                // console.log(this.state.product_name);
                // console.log(this.state.harvest_date);
                // console.log(this.state.chemicals_used);
                // console.log(this.state.certified_organic);
                // console.log(this.state.vendor_notes);
                // console.log(this.state.product_createdAt);
                // console.log(this.state.link_locations);
                // console.log(this.state.link_createdAt);
                // console.log(this.state.link_notes);
                // console.log(this.state.company_names);
                // console.log(this.state.websites);
                // console.log(this.state.vendor_locations);
            })
    }

    render() {
        return (
            <div>
                <div>
                    <p>{`This ${this.state.product_name} started out at ${this.state.company_names[0]} 
                in ${this.state.vendor_locations[0]}. They wanted us to tell you this: "${this.state.vendor_notes}". `}
                    </p>
                    <p>{`It was harvested on ${this.state.harvest_date} 
                and then travelled to ${this.state.company_names[1]} in ${this.state.vendor_locations[1]} on ${this.state.link_createdAt[1]}.
                `}</p>
                    {numberOfLinks >= 2 ?
                        <p>{`From there, it arrived at ${this.state.company_names[2]} in ${this.state.vendor_locations[2]} on ${this.state.link_createdAt[2]}.`}</p>
                        :
                        null}
                    {numberOfLinks >= 3 ?
                        <p>{`From there, it arrived at ${this.state.company_names[3]} in ${this.state.vendor_locations[3]} on ${this.state.link_createdAt[3]}.`}</p>
                        :
                        null}
                    {numberOfLinks >= 4 ?
                        <p>{`From there, it arrived at ${this.state.company_names[4]} in ${this.state.vendor_locations[4]} on ${this.state.link_createdAt[4]}.`}</p>
                        :
                        null}
                    {numberOfLinks >= 5 ?
                        <p>{`From there, it arrived at ${this.state.company_names[5]} in ${this.state.vendor_locations[5]} on ${this.state.link_createdAt[5]}.`}</p>
                        :
                        null}

                    <p>{`And now, this ${this.state.product_name} is here with you! It says, "hi".`}</p>

                </div>
            </div >
        );
    };
};
export default DisplayCodeDataPage;