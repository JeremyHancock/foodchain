//////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import API from "../utils/api";

const url = window.location.href;
const urlChunks = url.split("/");
// console.log(urlChunks);
const urlPieces = urlChunks[4] ? urlChunks[4].split("sirlinksalot") : [];
// console.log(urlPieces)

//urlPieces[0] === code_data
//urlPieces[1] === product_id
//urlPieces[2] === first link_id
//urlPieces[3] === second link_id ...

class DisplayCodeDataPage extends Component {
    constructor() {
        super();
        this.state = {
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
        this.getInfo = this.getInfo.bind(this);
    }
    componentDidMount() {
        // console.log("Line 34: " + JSON.stringify(this.state))
        this.getInfo();
    };

    async getInfo() {
        const linkVendors = [];

        API.getProduct(this.state.product_id)
            .then(res => {
                // console.log(res.data)
                if (res.data) {
                    this.setState({
                        organic: res.data.certified_organic,
                        chemicals: res.data.chemicals_used,
                        createdAt: res.data.createdAt,
                        harvest: res.data.harvest_date,
                        grower: res.data.vendor_id,
                        notes: res.data.vendor_notes
                    })
                }
            });
        // console.log("Line 53 :" + this.state.link_id);
        this.state.link_id.map(function (value, i) {
            API.getLink(value)
                .then(res => {
                    linkVendors.push(res.data);
                    // console.log("Line 58: " + JSON.stringify(res.data));
                    // console.log("Line 60: " + JSON.stringify(linkVendors));
                    return linkVendors
                });
        });
        // this.setState({ link_id: 'loading...' });
        // let d = await this.state.link_id.map(function (value, i);
        // this.setState({ link_id: d })
        // console.log("Line 64: " + this.state.link_id);
    }

    render() {
        return (
            <div>
                <p className="main">
                    <ul>
                        <li>{this.state.harvest}</li>
                        <li>{this.state.grower}</li>
                        <li>{this.state.organic}</li>
                        <li>{this.state.chemicals}</li>
                        {this.state.link_id.map(item => (
                            <li>{`this ${item.location}`}</li>
                        ))}

                    </ul>
                </p>
            </div >
        );
    }
}
export default DisplayCodeDataPage;