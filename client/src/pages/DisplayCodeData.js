import React, { Component } from "react";
import API from "../utils/api";
import SimpleMap from "../components/GoogleMap";
import Geocode from "react-geocode";

const url = window.location.href;
const urlChunks = url.split("/");
const urlPieces = urlChunks[4] ? urlChunks[4].split("lki") : [];
let linkLocations = [];
let linkCreatedAt = [];
let companyNames = [];
let vendorLocations = [];
let websites = [];
let productData = [];
let vendorCoordinates = [];

class DisplayCodeDataPage extends Component {
  constructor() {
    super();
    this.state = {
      product_name: "",
      chemicals_used: "",
      harvest_date: "",
      product_createdAt: "",
      certified_organic: false,
      company_names: [],
      vendor_locations: [],
      vendor_notes: [],
      link_locations: [],
      link_createdAt: [],
      link_notes: [],
      websites: [],
      code_data: urlPieces[0],
      product_id: urlPieces[1],
      link_id: urlPieces.slice(2),
      loading: true,
      map_ready: false,     
      coordinates: []
    };
    this.getVendorInfo = this.getVendorInfo.bind(this);
  }
  componentDidMount() {
    API.getProduct(this.state.product_id)
      .then(res => {
        productData.push(res.data);
      })
      .then(() => {
        const links = this.state.link_id;
        links.forEach(link =>
          API.getLink(link).then(res => {
            linkCreatedAt.push(res.data.link_date);
            linkLocations.push(res.data.location);
            this.getVendorInfo(res.data.vendor_id);
          })
        );
      });
  }

  getVendorInfo(input) {
    const vendor = input;
    API.getVendorById(vendor)
      .then(res => {
        if (res.data) {
          companyNames.push(res.data.company_name);
          vendorLocations.push(res.data.location);
          websites.push(res.data.website);
          Geocode.fromAddress(res.data.location)
            .then(
              response => {
                const { lat, lng } = response.results[0].geometry.location;
                let coordinate = { lat, lng };
                vendorCoordinates.push(coordinate);
              },
              error => {
                console.error(error);
              }
            );
        }
      })
      .then(() => {
        this.setState({
          loading: false,
          product_name: productData[0].product_name,
          harvest_date: productData[0].harvest_date,
          chemicals_used: productData[0].chemicals_used,
          certified_organic: productData[0].certified_organic,
          vendor_notes: productData[0].vendor_notes,
          product_createdAt: productData[0].createdAt,
          link_locations: linkLocations,
          link_createdAt: linkCreatedAt,
          company_names: companyNames,
          websites: websites,
          vendor_locations: vendorLocations,
          coordinates: vendorCoordinates

        });
      });
  }

  render() {
    // get all stops in the chain except product origin
    const lastNames = this.state.company_names.slice(
      1,
      this.state.company_names.length
    );
    const lastLocs = this.state.link_locations.slice(
      1,
      this.state.link_locations.length
    );
    const lastLinks = this.state.link_createdAt.slice(
      1,
      this.state.link_createdAt.length
    );
    const lastWebs = this.state.websites.slice(
      1,
      this.state.websites.length
    );

    // Declare an array to hold text strings to describe each stop
    let chainStrings = [];
    let newStop;

    // chain uses the modified arrays to construct a text string for each stop
    const chain = () => {
      for (var p = 0; p < lastLocs.length; p++) {
        newStop = <p>From there, it arrived at <a href={lastWebs[p]}>{lastNames[p]}</a> in {lastLocs[p]} on {lastLinks[p]}</p>;
        chainStrings.push(newStop);
      }
    };

    // call the chain function
    chain();
    // map the array to create a <p> tag for each stop
    const stops = chainStrings.map(stop => {
      return stop;
    });
const mapOn = () => {
  this.setState({map_ready: true})
}
    return (
      <div>
        {!this.state.loading ? (
          <div>
            <h3>Check out the links in your Foodchain!</h3>
            <p>
              This {this.state.product_name} started out at <a href={this.state.websites[0]}>{this.state.company_names[0]}</a> in {this.state.link_locations[0]} on {this.state.harvest_date}. They wanted us to tell you this: "{this.state.vendor_notes}"`
            </p>
            <div>{stops}</div>
            <p>{`And now this ${this.state.product_name} is here with you. It says, "hi".`}</p>
            {this.state.map_ready? 
            <SimpleMap
              {...this.state}
            />
            :
            <button className="btn btn-success" onClick={mapOn}>See map</button> }
          </div>
        ) : (
            <div>Loading ... </div>
          )}
      </div>
    );
  }
}
export default DisplayCodeDataPage;
