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
            codedUrl: "",
            linkCreated: false

        }
        this.postLink = this.postLink.bind(this);
    };

    postLink() {
        const newLink = this.state;
        API.postLink(newLink)
            .then(res => {
                this.setState({
                    link_id: res.data.id,
                    codedUrl: `${this.state.result}lki${res.data.id}`,
                    linkCreated: true
                });
                console.log("Link saved! " + JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
    }
    handleScan = data => {
        if (data) {
            const urlChunks = data.split("scan");
            const urlPieces = urlChunks[1].split("lki");
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
                    <div>
                        <p className="confirm-info">Scan the code with your camera. Use the viewer box below to center it and try to hold it steady.</p>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                    </div>
                    : null}
                <div className="confirm-info">
                    {this.state.linkCreated ?
                        <p>This code needs to be sent with your product so that it can be scanned by the next link in the Foodchain. Please save or print this image.</p>
                        :
                        <div>
                            <ul>Is this information correct?
                                    <li>Company name: {this.props.company_name}</li>
                                <li>Location: {this.props.location}</li>
                                <li>Current time: {date}</li>
                            </ul>
                            <button className="btn btn-success" onClick={this.postLink}>Confirm</button>
                        </div>
                    }
                </div>
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