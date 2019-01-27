import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyChnsvVv_ttcAq-b2AqSRpVOnJYyH6-yTQ");
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 37.764682,
                lng: -77.458804
            },
            zoom: 7.2,
        };
    };

    render() {
        let coordinatesArray = []
        coordinatesArray = this.props.coordinates;

        return (
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyChnsvVv_ttcAq-b2AqSRpVOnJYyH6-yTQ' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {coordinatesArray.map(coordinates => {
                        return (
                            <AnyReactComponent
                                lat={coordinates.lat}
                                lng={coordinates.lng}
                                text={<i className="fas fa-link"></i>}
                            />
                        )
                    })
                    }
                </GoogleMapReact>
            </div >
        );
    }
}

export default SimpleMap;