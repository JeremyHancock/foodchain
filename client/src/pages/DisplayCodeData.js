import React, { Component } from "react";
import API from "../utils/api";

const url = window.location.href;
const urlChunks = url.split("/");
const urlPieces = urlChunks[4] ? urlChunks[4].split("lki") : [];
let numberOfLinks = urlPieces.length - 2;
console.log(urlPieces);
let linkLocations = [];
let linkCreatedAt = [];
let companyNames = [];
let vendorLocations = [];
let websites = [];
let productData = [];
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
            loading: true

        };
        this.getVendorInfo = this.getVendorInfo.bind(this);
    }
    componentDidMount() {
        API.getProduct(this.state.product_id)
            .then(res => {
                // console.log("Product info: " + JSON.stringify(res.data));
                productData.push(res.data);
            })
            .then(() => {
                const links = this.state.link_id;
                links.forEach(link =>
                    API.getLink(link)
                        .then(res => {
                            // console.log("Link info: " + JSON.stringify(res.data));
                            linkCreatedAt.push(res.data.createdAt);
                            linkLocations.push(res.data.location);
                            this.getVendorInfo(res.data.vendor_id);
                        })
                )
            })
    };

    getVendorInfo(input) {
        const vendor = input;
        API.getVendorById(vendor)
            .then(res => {
                if (res.data) {
                    // console.log("Vendor info: " + JSON.stringify(res.data));
                    companyNames.push(res.data.company_name);
                    vendorLocations.push(res.data.location);
                    websites.push(res.data.website);
                }
            })
            .then(() => {
                this.setState({
                    loading: false,
                    product_name: productData[0].product_name,
                    harvest_date: productData[0].harvest_date,
                    chemicals_used: productData[0].chemicals_used,
                    certified_organic: productData[0].certified_organic,
                    vendor_notes: productData[0].vendor_notes,
                    product_createdAt: productData[0].createdAt,
                    link_locations: linkLocations,
                    link_createdAt: linkCreatedAt,
                    company_names: companyNames,
                    websites: websites,
                    vendor_locations: vendorLocations,
                })
            })
    };

    render() {
        return (
            <div>
                {!this.state.loading ?
                    <div>
                        <p>{`This ${this.state.product_name} started out at ${this.state.company_names[0]} 
                in ${this.state.vendor_locations[0]}. They wanted us to tell you this: "${this.state.vendor_notes}". `}
                        </p>
                        <p>{`It was harvested on ${this.state.harvest_date} 
                and then travelled to ${this.state.company_names[1]} in ${this.state.vendor_locations[1]} on ${this.state.link_createdAt[1]}.
                `}</p>
                        {numberOfLinks > 2 ?
                            <p>{`From there, it arrived at ${this.state.company_names[2]} in ${this.state.vendor_locations[2]} on ${this.state.link_createdAt[2]}.`}</p>
                            :
                            null}
                        {numberOfLinks > 3 ?
                            <p>{`From there, it arrived at ${this.state.company_names[3]} in ${this.state.vendor_locations[3]} on ${this.state.link_createdAt[3]}.`}</p>
                            :
                            null}
                        {numberOfLinks > 4 ?
                            <p>{`From there, it arrived at ${this.state.company_names[4]} in ${this.state.vendor_locations[4]} on ${this.state.link_createdAt[4]}.`}</p>
                            :
                            null}
                        {numberOfLinks > 5 ?
                            <p>{`From there, it arrived at ${this.state.company_names[5]} in ${this.state.vendor_locations[5]} on ${this.state.link_createdAt[5]}.`}</p>
                            :
                            null}

                        <p>{`And now, this ${this.state.product_name} is here with you! It says, "hi".`}</p>

                    </div>
                    : <div>Loading ... </div>}
            </div >
        );
    };
};
export default DisplayCodeDataPage;