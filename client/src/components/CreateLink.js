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
      link_date: date,
      product_id: this.props.product_id,
      location: this.props.location,
      link_id: "",
      codedUrl: "",
      linkCreated: false
    };
    this.postLink = this.postLink.bind(this);
  }

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
      API.getProduct(urlPieces[1]).then(res => {
        this.setState({
          result: data,
          scannerOn: false,
          product_id: urlPieces[1],
          vendor_id: this.props.vendor_id,
          product_name: res.data.product_name,
          linkCreated: true
        });
        this.postLink();
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <div>
        {this.state.scannerOn ? (
          <div>
            {/* <p className="confirm-info">Scan the code with your camera. Use the viewer box below to center it and try to hold it steady.</p> */}
            <QrReader
              className="scanner"
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
            />
            <div className="instructions">
              <p>
                {" "}
                Please scan the Foodchain code with your camera. Use the viewer
                box to center the code.
              </p>
              <p>
                If asked, please allow this application access to your camera.
              </p>
              <div className="button-group">
                <button className="btn btn-success">Scan a code</button>
                <button
                  className="btn btn-success"
                  onClick={this.props.isProduct}
                >
                  Enter a new item
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="confirm-info">
          {this.state.linkCreated ? (
            <div>
              <p>Success! You scanned a {this.state.product_name}.</p>
              <p>
                You have created a new link in the Foodchain! The code below
                needs to be sent with your product so that it can be scanned by
                the next link in the Foodchain.
              </p>
              <p>
                Please save or print this image. It can be included with
                invoices, shipping manifests, or printed and displayed on shelf
                labels.
              </p>
              <p>
                The code you just scanned can be discarded. This code now
                contains all the information about this{" "}
                {this.state.product_name}.
              </p>
            </div>
          ) : (
            <div>
              <ul>
                Your information
                <li>Company name: {this.props.company_name}</li>
                <li>Location: {this.props.location}</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <div>
            {this.state.codedUrl ? (
              <div>
                <CreateCode codedUrl={this.state.codedUrl} />
                <br />
                {/* <div className="button-group"> */}
                <br />
                <button
                  className="btn btn-success"
                  onClick={this.props.windowReset}
                >
                  Scan a code
                </button>
                <br />
                <br />
                <button
                  className="btn btn-success"
                  onClick={this.props.isProduct}
                >
                  Enter a new item
                </button>
                <br />
                <br />
              </div>
            ) : // </div>
            null}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateLink;
