import React, { Component } from 'react';
import marker_img from '../images/download.png'

class Marker extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="marker">
           <img  class="the_marker"src={marker_img} alt="" />
        </div> );
    }
}
 
export default Marker;