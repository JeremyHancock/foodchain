import React, { Component } from "react";
import API from "../utils/api";
import UUID from "uuid/v1";
import CreateCode from "../components/CreateCode";

// import "./style.css"

var d = new Date();
var date = d.toLocaleDateString();

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor_id: "",
      harvest_date: date,
      chemicals_used: "",
      certified_organic: "",
      vendor_notes: "",
      code_value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ code_value: `https://foodchains.herokuapp.com/consumer/${UUID()}`})
    const newProduct = this.state;
    !newProduct.harvest_date || !newProduct.chemicals_used || !newProduct.certified_organic ?
      alert("You must fill in all required fields to create a new product.")
      : console.log("good entry");
    API.postProduct(newProduct)
      .then(res => {
        console.log("Product saved! " + JSON.stringify(res.data));
      })
      .catch(err => console.log(err));
    // const newLink = this.state;
    // API.postLink(newLink)
    //   .then(res => {
    //     this.setState({
    //       code_value: `https://foodchains.herokuapp.com/consumer/${this.state.code_value}`
    //     });
    //   })
    //   .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="main">
        <h1>Create Product</h1>
        <div className="form-group">
          <form onSubmit={this.handleFormSubmit}>
            <p className="form-label">Vendor ID:</p>
            <input
              name="vendor_id"
              className="form-control"
              type="text"
              value={this.state.vendor_id}
              placeholder="This should auto-populate"
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
          {/* Render the CreateCode component if code_value is truthy (has a value) */}
          {this.state.code_value ?
            <CreateCode code_value={this.state.code_value} />
            : null
          }
        </div>
        <p>{this.state.code_value}</p>
      </div>
    );
  }
}

export default CreateProduct;
