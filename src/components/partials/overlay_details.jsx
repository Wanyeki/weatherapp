import React, { Component } from 'react';
import image from '../images/download.png'
class Overlay extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="overlay">
               {this.props.weather.main && <div className="overlay_wrapper">
                    <div className="title">
                        {this.props.weather.name}
                    </div>
                    <br />
                    <div className="details">
                        <div className="det">Humidity: <span>{this.props.weather.main.humidity}%</span> </div>
                        <div className="det">Temp: <span>{this.props.weather.main.temp} °C</span> </div>
                        <div className="det">Pressure: <span>{this.props.weather.main.pressure} pa</span> </div>
                        <div className="det">Wind: <span>{this.props.weather.wind.speed} km/h</span> </div>

                    </div>
                    <br />
                    <div className="bd">
                   <img className="weth_icon" src={"http://openweathermap.org/img/wn/"+ this.props.weather.weather[0].icon+"@2x.png"} alt="" />
                   <div className="the_weather">{this.props.weather.weather[0].description}</div>
                    </div>
                </div>}
                {this.props.weather.main &&  <img  class="the_marker"src={image} alt="" />}
            </div>
         );
    }
}
 
export default Overlay;