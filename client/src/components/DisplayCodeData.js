import React, { Component } from "react";
import API from "../utils/api";

class DisplayCodeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organic: false,
            chemicals: "",
            harvest: "",
            grower: ""
        };
        this.getInfo = this.getInfo.bind(this);
    }
    componentDidMount() {
        this.getInfo();
    };

    getInfo() {
        API.getCode(this.props.code_data)
            .then(res => { console.log(res.data) });

        API.getProduct(this.props.product_id)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    this.setState({
                        organic: res.data.certified_organic,
                        chemicals: res.data.chemicals_used,
                        createdAt: res.data.createdAt,
                        harvest: res.data.harvest_date,
                        grower: res.data.vendor_id
                    })
                        .catch(err => console.log(err));
                }
            });

        [...this.props.link_id].forEach(function (value, i) {
            API.getLink(value)
                .then(res => {
                    console.log(res.data)

                });
        });
    }

    render() {
        return (
            <div>
                <p className="main">
                    {`This was harvested on ${this.harvest} by ${this.grower}.\n
                ${this.organic ? 'It is certified organic.' : null}\n
                ${this.chemicals ? `These pesticides and fertilizers were used: ${this.chemicals}` : `No pesticides or fertilizers were used!`}`}
                </p>
            </div>
        );
    }
}
export default DisplayCodeData;