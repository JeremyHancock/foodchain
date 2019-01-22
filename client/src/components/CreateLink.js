import React, { Component } from "react";
import QrReader from "react-qr-reader";
import API from "../utils/api";
import CreateCode from "./CreateCode";

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
            link_id: "",
            codedUrl: ""
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
                    codedUrl: `${this.state.result}sirlinksalot${res.data.id}`,
                });
                console.log("Link saved! " + JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
    }
    handleScan = data => {
        if (data) {
            const urlChunks = data.split("scan");
            const urlPieces = urlChunks[1].split("sirlinksalot");
            console.log(urlPieces);
            this.setState({
                result: data,
                scannerOn: false,
                product_id: urlPieces[1],
                vendor_id: this.props.vendor_id
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
                <div>
                    <div>
                        {this.state.codedUrl ?
                            <div>
                                <CreateCode codedUrl={this.state.codedUrl} />
                                <p className="confirm-info">{this.state.codedUrl}</p>
                            </div>
                            : null}
                    </div>
                </div>

            </div >
        );
    }
}

export default CreateLink;