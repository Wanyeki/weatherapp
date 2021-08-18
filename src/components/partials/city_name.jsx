import React, { Component } from 'react';

class CityName extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="city_name">
                <div className="cityWrapper">
                    <div className="ctname">
                        {this.props.weather.name ? this.props.weather.name : "Search"}
                    </div>
                    <br />
                    {this.props.weather.name &&
                    <div className="lat_lng">
                        lat: {this.props.weather.coord.lat} , lng: {this.props.weather.coord.lon} 
                    </div>
                    }
                     {this.props.weather.name &&
                   <img className="weth_icon2" src={"http://openweathermap.org/img/wn/"+ this.props.weather.weather[0].icon+"@2x.png"} alt="" />
                     }
                    <br />
                    <button className="btn" onClick={e=>{this.props.get_saved()}}>Saved locations</button>
                </div>
            </div>
         );
    }
}
 
export default CityName;