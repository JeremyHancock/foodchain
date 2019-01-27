////////----->>>>> DO NOT PUSH WITH KEY EXPOSED!! LINE 7 AND LINE 48
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyChnsvVv_ttcAq-b2AqSRpVOnJYyH6-yTQ");
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.764682,
      lng: -77.458804
    },
    zoom: 7.2
  };

  render() {
    /*  /////////////////   NEW /////////////////// */
    console.log(this.props.coordinates);
    let coordinatesArray = [];
    coordinatesArray = this.props.coordinates;
    /*  /////////////////       /////////////////// */

    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyChnsvVv_ttcAq-b2AqSRpVOnJYyH6-yTQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/*  /////////////////   NEW /////////////////// */}
          {coordinatesArray.map(coordinates => {
            console.log("lat: " + coordinates.lat);
            console.log("lng: " + coordinates.lng);
            return (
              <AnyReactComponent
                lat={coordinates.lat}
                lng={coordinates.lng}
                text={<i className="fas fa-tractor" />}
              />
            );
          })}
          {/*  /////////////////       /////////////////// */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
