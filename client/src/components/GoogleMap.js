////////----->>>>> DO NOT PUSH WITH KEY EXPOSED!! LINE 7 AND LINE 48

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

Geocode.setApiKey("xxxxxxxxxxxxxxxxxxxxxxxx");
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 37.764682,
            lng: -77.458804
        },
        zoom: 7
    };
    constructor(props) {
        super(props);
        this.state = {
            locations: this.props.vendor_locations
        };
    };

    render() {
        let addresses = this.state.locations;
        let coordinates = [];

        const getCoordinates = () => {
            addresses.map(address => {
                Geocode.fromAddress(address).then(
                    response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        let coordinate = { lat, lng };
                        coordinates.push(coordinate);
                        // console.log(coordinates);
                    },
                    error => {
                        console.error(error);
                    }
                );
            })
        };
        getCoordinates()
        // const stops = coordinates.map(stop => {
        // });
        console.log(coordinates);
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <AnyReactComponent
                            lat={coordinates[0].lat}
                            lng={coordinates[0].lng}
                            text={<i className="fas fa-tractor"></i>}
                        /> */}
                        {/* <AnyReactComponent
                            lat={coordinates[1].lat}
                            lng={coordinates[1].lng}
                            text={<i className="fas fa-truck"></i>}
                        />
                        <AnyReactComponent
                            lat={coordinates[2].lat}
                            lng={coordinates[2].lng}
                            text={<i className="fas fa-shopping-cart"></i>}
                        /> */}

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;