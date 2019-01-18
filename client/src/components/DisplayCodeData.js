import React, { Component } from "react";
import API from "../utils/api";

class DisplayCodeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organic: false,
            chemicals: "",
            harvest: "",
            grower: "",
            createdAt: "",
            link_id: [],
            vendor_id: []

        };
        this.getInfo = this.getInfo.bind(this);
    }
    componentWillMount() {
        console.log(JSON.stringify(this.state))
        this.getInfo();
    }; 

    getInfo() {
        API.getProduct(this.props.product_id)
            .then(res => {
                console.log(res.data)
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
        const linkVendors = [];
        console.log("Line 42 :" + this.props.link_id);
        this.props.link_id.map(function (value, i) {
            API.getLink(value)
                .then(res => {
                    linkVendors.push(res.data);
                    console.log("Line 46: " + JSON.stringify(res.data));
                    console.log(linkVendors);
                });
        });
        this.setState({
            link_id: linkVendors
        })
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
            </div>
        );
    }
}
export default DisplayCodeData;