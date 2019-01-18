import React, { Component } from "react";
import API from "../utils/api";
import UUID from "uuid/v1";
import CreateCode from "../components/CreateCode";

// import "./style.css"

const d = new Date();
const date = d.toLocaleDateString();
const url = window.location.href;
const urlPieces = url.split("/");
const userIdFromUrl = urlPieces[4];

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor_id: 1,
      product_id: 1,
      link_id: 1,
      harvest_date: date,
      chemicals_used: "",
      certified_organic: "",
      vendor_notes: "",
      code_value: "",
      codedUrl: "",
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getVendorInfo = this.getVendorInfo.bind(this);
  }
  componentDidMount() {
    this.getVendorInfo();
  }

  getVendorInfo() {
    API.getVendor(userIdFromUrl)
      .then(res => {
        this.setState({
          vendor_id: res.data[0].id,
          code_value: `${UUID()}`
        })
        console.log(`Got vendor info from the url: ${res.data[0].user_name} - ${this.state.vendor_id}`)
      })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newProduct = this.state;
    !newProduct.harvest_date || !newProduct.chemicals_used || !newProduct.certified_organic ?
      alert("You must fill in all required fields to create a new product.")
      : console.log("good entry");

    API.postProduct(newProduct)
      .then(res => {
        console.log("Product saved! " + JSON.stringify(res.data));
        this.setState({ product_id: res.data.id });
        console.log("New product's id: " + this.state.product_id);
      })
      .then(res => {
        const newCode = this.state;
        API.postCode(newCode)
          .then(res => {
            console.log("Code saved! " + JSON.stringify(res.data));
          })
          .then(res => {
            const newLink = this.state;
            API.postLink(newLink)
              .then(res => {
                console.log("Link saved! " + JSON.stringify(res.data));
                this.setState({ 
                  link_id: res.data.id,
                  codedUrl: `http://localhost:3000/consumer/89d1cba0-1a7e-11e9-8f4a-312bb1b0bd75sirlinksalot28sirlinksalot14sirlinksalot13sirlinksalot4sirlinksalot3sirlinksalot1`
                  // `https://foodchains.herokuapp.com/consumer/${newLink.code_value}sirlinksalot${res.data.id}` 
                });
                console.log("New link's id: " + this.state.link_id);
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="main">
        <h1>Create Product</h1>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            {/* <p className="form-label">Vendor ID:</p>
            <input
              name="vendor_id"
              className="form-control"
              type="text"
              value={this.state.vendor_id}
              placeholder="This should auto-populate"
              onChange={this.handleChange}
            />
            <br /> */}
            <p className="form-label">Harvest Date:</p>
            <input
              name="harvest_date"
              className="form-control"
              type="text"
              value={this.state.harvest_date}
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">What Chemicals Were Used?</p>
            <input
              name="chemicals_used"
              className="form-control"
              type="text"
              value={this.state.chemicals_used}
              placeholder="fertilizer name, pesticide name"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Is This Product Certified Organic?</p>
            <input
              name="certified_organic"
              className="form-control"
              type="text"
              value={this.state.certified_organic}
              placeholder="I'll make this a pair of radios with a boolean switch"
              onChange={this.handleChange}
            />
            <br />
            <p className="form-label">Notes / Comments:</p>
            <input
              name="vendor_notes"
              className="form-control"
              type="text"
              value={this.state.vendor_notes}
              placeholder="Additional details..."
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-dark">Submit</button>{" "}
          </form>
        </div>
        <div>
          {/* Render the CreateCode component if codedUrl is truthy (has a value) */}
          {this.state.codedUrl ?
            <CreateCode codedUrl={this.state.codedUrl} />
            : null
          }
        </div>
        <p>{this.state.codedUrl}</p>
      </div>
    );
  }
}

export default CreateProduct;
