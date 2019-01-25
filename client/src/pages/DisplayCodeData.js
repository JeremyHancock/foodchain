import React, { Component } from "react";
import API from "../utils/api";
import { join } from "upath";

const url = window.location.href;
const urlChunks = url.split("/");
const urlPieces = urlChunks[4] ? urlChunks[4].split("lki") : [];
let numberOfLinks = urlPieces.length - 2;
console.log(urlPieces);
let linkLocations = [];
let linkCreatedAt = [];
let companyNames = [];
let vendorLocations = [];
let websites = [];
let productData = [];
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
      loading: true
    };
    this.getVendorInfo = this.getVendorInfo.bind(this);
  }
  componentDidMount() {
    API.getProduct(this.state.product_id)
      .then(res => {
        // console.log("Product info: " + JSON.stringify(res.data));
        productData.push(res.data);
      })
      .then(() => {
        const links = this.state.link_id;
        links.forEach(link =>
          API.getLink(link).then(res => {
            // console.log("Link info: " + JSON.stringify(res.data));
            linkCreatedAt.push(res.data.createdAt);
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
          // console.log("Vendor info: " + JSON.stringify(res.data));
          companyNames.push(res.data.company_name);
          vendorLocations.push(res.data.location);
          websites.push(res.data.website);
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
          vendor_locations: vendorLocations
        });
      });
  }

  render() {
    // get all stops in the chain except product origin
    const lastNames = this.state.company_names.slice(
      1,
      this.state.company_names.length
    );
    const lastLocs = this.state.vendor_locations.slice(
      1,
      this.state.vendor_locations.length
    );
    const lastLinks = this.state.link_createdAt.slice(
      1,
      this.state.link_createdAt.length
    );


    // Declare an array to hold text strings to describe each stop
    let chainStrings = [];
    let newStop;
    
    // chain uses the modified arrays to construct a text string for each stop
    const chain = () => {
      console.log(lastLocs.length);
      for (var p = 0; p < lastLocs.length; p++) {
        newStop = `From there, it arrived at ${lastNames[p]} in ${lastLocs[p]} on ${lastLinks[p]}`;
        chainStrings.push(newStop);
      }
    };

    // call the chain function
    chain();
    
    // map the array to create a <p> tag for each stop
    const stops = chainStrings.map(stop => {
      return <p> {stop} </p>;
    });

    return (
      <div>
        {!this.state.loading ? (
          <div>
            <p>
              {`This ${this.state.product_name} started out at ${
                this.state.company_names[0]
              } 
                in ${
                  this.state.vendor_locations[0]
                }. They wanted us to tell you this: "${
                this.state.vendor_notes
              }"`}
            </p>
            <div>{stops}</div>
          </div>
        ) : (
          <div>Loading ... </div>
        )}
      </div>
    );
  }
}
export default DisplayCodeDataPage;
