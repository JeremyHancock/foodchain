import React, { Component } from "react";
import QrReader from 'react-qr-reader';
import API from "../utils/api";

const d = new Date();
const date = d.toLocaleTimeString();

class CreateLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            scannerOn: true,
            vendor_id: this.props.vendor_id,
            code_value: this.props.code_value,
            product_id: this.props.product_id,
            location: this.props.location,
            link_id: ""
        }
        this.postLink = this.postLink.bind(this);
    };

    postLink() {
        const newCode = this.state;
        API.postCode(newCode)
            .then(res => {
                console.log("Code saved! " + JSON.stringify(res.data));
            })
                const newLink = this.state;
                API.postLink(newLink)
                    .then(res => {
                        this.setState({
                            link_id: res.data.id,
                            codedUrl: `${this.state.result}sirlinksalot${this.state.link_id}`,
                        });        
                        console.log("Link saved! " + JSON.stringify(res.data));
                        console.log("New link's id: " + this.state.link_id);
                    })
                    .catch(err => console.log(err));
    }
    handleScan = data => {
        if (data) {
            const urlPieces = data.split("consumer");
            console.log(urlPieces);
            this.setState({
                result: data,
                scannerOn: false
            })
        }
    }
    handleError = err => { console.error(err) }

    render() {
        return (
            <div className="scanner">
                {this.state.scannerOn ?
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                    :
                    <div className="confirm-info">
                        <ul>Is this information correct?
                            <li>Company name: {this.props.company_name}</li>
                            <li>Location: {this.props.location}</li>
                            <li>Current time: {date}</li>
                        </ul>
                        <button className="btn btn-success" onClick={this.postLink}>Confirm</button>
                    </div>


                }
            </div>
        );
    }
}

export default CreateLink;