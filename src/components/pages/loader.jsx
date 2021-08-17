import React, { Component } from 'react';
import '../../css/loader.css'
import loading_img from '../images/loader.gif'

class Loader extends Component {
    state = {  }
    render() { 
        return ( <div className="loader">
            {this.props.loading_text && <span>{this.props.loading_text}</span> }
            <img src={loading_img} alt=""/>
        </div> );
    }
}
 
export default Loader;
