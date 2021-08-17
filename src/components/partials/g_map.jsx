import React, { Component } from "react";
import GoogleMapReact from 'google-map-react'

class GMap extends Component {
  state = {};
  render() {
    return (
      <div className="gmap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.auth_key}}
          defaultCenter={this.props.coordinates}
          defaultZoom={this.props.zoom}
        >
            {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;
