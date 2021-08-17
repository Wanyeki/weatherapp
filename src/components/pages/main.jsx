import React, { Component } from "react";
import Time from "../partials/time";
import "../../css/main.css";
import Search from "../partials/search";
import CityName from "../partials/city_name";
import GMap from "../partials/g_map";
import BottomPart from "../partials/bottom_part";
import Geocode from "react-geocode";
import Overlay from "../partials/overlay_details";
import Loader from "./loader";
import Marker from "../partials/marker";

const weather = require("openweather-apis");
const openGeocoder = require('node-open-geocoder');
const requests=require('../../firebase/requests')
const uuid=require('uuid')



class Main extends Component {
  //the state
  state = {
    coordinates: {
      lat: 0.5,
      lng:38.6666,
    },
    zoom: 7,
    weather:{},
    loading:false,
    searches:null
  };
  auth_key = "AIzaSyCxuLSbuIzxXlenXdw5Go3gclhUjChl2Go";

  //searching for a city (geocoding)
  search_city = (query) => { 
    this.setState({
      searches:null
    })
    this.show_loading()   
    openGeocoder()
      .geocode(query)
      .end((err, res) => {
        if(err){alert('cant connect')}
        if(res[0]){
        let coordinates={
          lat:res[0].lat,
          lng:res[0].lon
        }
        this.setState({
          coordinates:coordinates
        })
        console.log(coordinates)
        this.get_weather(coordinates)
      }else{
        alert('No matches found')
        this.close_loading()
      }

      })
    
  }

  //getting the current weather
  get_weather = (coordinates) => {
    weather.setCoordinate(coordinates.lat, coordinates.lng);
    weather.setUnits("metric");
    weather.setLang("en");
    weather.setAPPID("daaf28796af7382e3437583ceeaf7213");
    weather.getAllWeather( (err, JSONObj) =>{
      console.log(JSONObj)
      this.setState({
        weather: JSONObj,
      });
      console.log(JSONObj)
      this.close_loading()
      let user_id= localStorage.getItem('user_id')
      if(!user_id){
        user_id=uuid.v4();
        localStorage.setItem('user_id',user_id)
      }
      requests.save_search(user_id,JSONObj.name,coordinates)
    });

  };
  //show loading'
  show_loading=()=>{
    this.setState({loading:true})
  }
  // close loading 
  close_loading=()=>{
    this.setState({loading:false})
  }

  get_saved=async()=>{
    this.show_loading()
    let user_id= localStorage.getItem("user_id");
    let searches= await requests.get_saved(user_id);
    this.setState({
      searches:searches
    })
    this.close_loading()
  }
  //default render
  render() {
    return (
      <div className="main">
        <div className="top_part">
          <Time />
          <Search search_city={this.search_city} />
          { this.state.weather.main ?  <CityName weather={this.state.weather} get_saved={this.get_saved}  /> : <div className="emo"> </div>
          }
        </div>
        <GMap
          coordinates={this.state.coordinates}
          zoom={this.state.zoom}
          auth_key={this.auth_key}
        >
       <Overlay
            weather={this.state.weather}
            lat={this.state.coordinates.lat}
            lng={this.state.coordinates.lng}
          />
        {
          this.state.searches && this.state.searches.map(sc=>{
            return <Marker
            lat={sc.coordinates.lat}
            lng={sc.coordinates.lng}
            />
          })
        }
        </GMap>

        <BottomPart weather={this.state.weather} />
        {this.state.loading && <Loader/>}
      </div>
    );
  }
}

export default Main;
