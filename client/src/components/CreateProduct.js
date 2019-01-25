import React, { Component } from "react";
import API from "../utils/api";
import CreateCode from "../components/CreateCode";

const d = new Date();
const date = d.toLocaleDateString();
let chemicals = [];

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 1,
      product_name: "",
      link_id: 1,
      harvest_date: date,
      chemicals_used: "",
      glyphosphate: false,
      atrazine: false,
      metolachlorS: false,
      dichloropropene: false,
      twoFourD: false,
      certified_organic: false,
      vendor_notes: "",
      code_value: props.code_value,
      codedUrl: "",
      location: "",
      vendor_id: props.vendor_id

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.isOrganic = this.isOrganic.bind(this);
    this.hasChemicals = this.hasChemicals.bind(this);
  }
  isOrganic() {
    if (this.state.certified_organic) {
      this.setState({ certified_organic: false });
    } else {
      this.setState({ certified_organic: true });
    }
  }

  hasChemicals() {
    //push chemical into this.state.chemicals_used if (this.state.[chemical]) === true
    if (this.state.glyphosphate) {
      chemicals.push("Glyphosphate");
    }
    if (this.state.atrazine) {
      chemicals.push("Atrazine");
    }
    if (this.state.metolachlorS) {
      chemicals.push("Metolachlor-S");
    }
    if (this.state.dichloropropene) {
      chemicals.push("Dichloropropene");
    }
    if (this.state.twoFourD) {
      chemicals.push("2,4-D");
    }
    console.log("Line 81: " + chemicals);
    this.setState({ chemicals_used: chemicals.toString() });
    console.log("Line 83: " + chemicals.toString());
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.hasChemicals();
    const newProduct = this.state;
    !newProduct.harvest_date || !newProduct.product_name || !newProduct.certified_organic ?
      alert("You must fill in all required fields to create a new product.")
      : console.log(this.state);
    API.postProduct(newProduct)
      .then(res => {
        console.log("Product saved! " + JSON.stringify(res.data));
        this.setState({ product_id: res.data.id });
        console.log("New product's id: " + this.state.product_id);
      })
      .then(res => {
        const newLink = this.state;
        API.postLink(newLink)
          .then(res => {
            console.log("Link saved! " + JSON.stringify(res.data));
            this.setState({
              link_id: res.data.id,
              // for production
              // codedUrl: `localhost:3000/scan/${newLink.code_value}lki${newLink.product_id}lki${res.data.id}`,
              // for deployment
              codedUrl: `https://foodchains.herokuapp.com/scan/${newLink.code_value}lki${newLink.product_id}lki${res.data.id}` 
            });
            console.log("New link's id: " + this.state.link_id);
          })
          //     .catch(err => console.log(err));
          // })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* Render the CreateCode component if codedUrl is truthy (has a value) */}
        {this.state.codedUrl ?
          <div>
            <CreateCode codedUrl={this.state.codedUrl} />
            <div>
              <p>Success! You scanned a {this.state.product_name}.</p>
              <p>You have created the first link in a Foodchain! This code needs to be sent with your product so that it can be scanned by the next link in the Foodchain.</p>
              <p>Please save or print this image. It can be included with invoices, shipping manifests, or printed and displayed on shelf labels.</p>
            </div>
            <div className="button-group">
              <button className="btn btn-success" onClick={this.props.windowReset}>Scan a code</button>
              <button className="btn btn-success" onClick={this.props.isProduct}>Enter a new item</button>
            </div>
          </div>

          :
          <div>
            <button className="btn btn-success new-product-nav" onClick={this.props.isProduct}>Scan a code</button>
            <h1>Create Product</h1>
            <div className="form-group">
              <form onSubmit={this.handleFormSubmit}>
                <p className="form-label">Product Name:</p>
                <input
                  name="product_name"
                  className="form-control"
                  type="text"
                  value={this.state.product_name}
                  onChange={this.handleChange}
                />
                <br />
                <p className="form-label">Harvest Date:</p>
                <input
                  name="harvest_date"
                  className="form-control"
                  type="text"
                  value={this.state.harvest_date}
                  onChange={this.handleChange}
                />
                <br />
                <p className="form-label">Chemicals Used?</p>
                <p>
                  <input
                    type="checkbox"
                    name="glyphosphate"
                    checked={this.state.glyphosphate}
                    onChange={this.handleChange}
                  />
                  {"  "}
                  Glyphosphate{"  "}
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="atrazine"
                    checked={this.state.atrazine}
                    onChange={this.handleChange}
                  />
                  {"  "}
                  Atrazine{"  "}
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="metolachlorS"
                    checked={this.state.metolachlorS}
                    onChange={this.handleChange}
                  />
                  {"  "}
                  Metolchlor-S{"  "}
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="dichloropropene"
                    checked={this.state.dichloropropene}
                    onChange={this.handleChange}
                  />
                  {"  "}
                  Dichloropropene{"  "}
                </p>
                <p>
                  <input
                    type="checkbox"
                    name="twoFourD"
                    checked={this.state.twoFourD}
                    onChange={this.handleChange}
                  />
                  {"  "}
                  2,4-D <br />
                  <input
                    type="checkbox"
                    name="other"
                    checked={this.state.other}
                    onChange={this.handleChange}
                  />
                  {"  "}
                  Other (list):{" "}
                  <input
                    id="other"
                    name="other"
                    className="form-control"
                    type="text"
                    value={this.state.other}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                </p>
                <p>Is This Product Certified Organic?</p>
                <p>
                  <input
                    type="radio"
                    name="certified_organic"
                    value="true"
                    checked={this.state.certified_organic === true}
                    onChange={this.isOrganic}
                  />
                  Yes{" "}
                  <input
                    type="radio"
                    name="certified_organic"
                    value="false"
                    checked={this.state.certified_organic === false}
                    onChange={this.isOrganic}
                  />
                  {"  "}
                  No
            </p>
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
                <button className="btn btn-success">Submit</button>{" "}
              </form>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default CreateProduct;
