//////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import API from "../utils/api";

const url = window.location.href;
const urlChunks = url.split("/");
const urlPieces = urlChunks[4] ? urlChunks[4].split("sirlinksalot") : [];
console.log(urlPieces)

//urlPieces[0] === code_data
//urlPieces[1] === product_id
//urlPieces[2] === first link_id
//urlPieces[3] === second link_id ...

class DisplayCodeDataPage extends Component {
    constructor() {
        super();
        this.state = {
            product_name: "",
            organic: false,
            chemicals: "",
            harvest: "",
            grower: "",
            createdAt: "",
            vendor_id: [],
            code_data: urlPieces[0],
            product_id: urlPieces[1],
            link_id: urlPieces.slice(2)

        };
        this.getProductInfo = this.getProductInfo.bind(this);
        // this.getLinkInfo = this.getLinkInfo.bind(this);
    }
    async componentDidMount() {
        await this.getProductInfo();
        // await this.getLinkInfo();
    };

    getProductInfo() {
        API.getProduct(this.state.product_id)
            .then(res => {
                // console.log(res.data)
                if (res.data) {
                    this.setState({
                        product_name: res.data.product_name,
                        organic: res.data.certified_organic,
                        chemicals: res.data.chemicals_used,
                        createdAt: res.data.createdAt,
                        harvest: res.data.harvest_date,
                        notes: res.data.vendor_notes
                    })
                }
            });
        // getLinkInfo() {
        const linkArray = [];
        const links = this.state.link_id;
        const vendorArray = [];
        // console.log(links);
        links.forEach(link =>
            API.getLink(link)
                .then(res => {
                    // console.log(res.data)
                    if (res.data) {
                        linkArray.push(res.data);
                        console.log(linkArray);
                        console.log(res.data.vendor_id);
                        const vendor = res.data.vendor_id
                        API.getVendorById(vendor)
                            .then(res => {
                                if (res.data) {
                                    vendorArray.push(res.data);
                                }
                                console.log(vendorArray);
                                this.setState({
                                    link_id: linkArray,
                                    vendor_id: vendorArray,
                                    grower: vendorArray[0].company_name
                                });
                                console.log(JSON.stringify(this.state));
                            })
                    }
                })
        )
        // }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{`Product Name: ${this.state.product_name}`}</li>
                    <li>{`Harvest Date: ${this.state.harvest}`}</li>
                    <li>{`Created At: ${this.state.createdAt}`}</li>
                    <li>{`Grower: ${this.state.grower}`}</li>
                    <li>{`Organic: ${this.state.organic}`}</li>
                    <li>{`Chemicals: ${this.state.chemicals}`}</li>
                    <li>{`Notes: ${this.state.notes}`}</li>
                    {this.state.link_id.map(item => (
                        <ul>
                            <li>{`Link created at: ${item.createdAt}`}</li>
                            <li>{`by vendor number: ${item.vendor_id}`}</li>
                        </ul>
                    ))}

                </ul>
            </div >
        );
    }
}
export default DisplayCodeDataPage;