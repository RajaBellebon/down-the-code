import React, { Component } from 'react';
import LatLong from './LatLong';
import DisplayTemp from './DisplayTemp';
const Data = require('./helper');


export default class Weather extends Component {
constructor(props){
    super(props);
    this.state ={
      Country: '',
      Lat: '',
      Long: '',
      Temp:'Loading',
      TempMin: '',
      TempMax: '',
      Sunrise: '',
      Sunset: '',
      Weather: {},
      Name: ''
    }
    this.onPass = this.onPass.bind(this)
  };
onPass(Lat,Long) {
    const that = this;
Data.getTemperature(Lat,Long).then(function (data) {
      that.setState({
        Lat,
        Long,
        Country: data.sys.country,
        Temp: data.main.temp,
        TempMin: data.main.temp_min,
        TempMax: data.main.temp_max,
        Sunrise: data.sys.sunrise,
        Sunset: data.sys.sunset,
        Weather: data.weather[0],
        Name: data.name
      });
    },
    function (errorMessage) {
        alert(errorMessage);
    });
  }
render(){
    return(
      <div>
        <LatLong onPass = {this.onPass} />
        <DisplayTemp Country={this.state.Country} Name = {this.state.Name} Lat = {this.state.Lat} Long = {this.state.Long} Temp = {this.state.Temp} TempMin = {this.state.TempMin} TempMax = {this.state.TempMax} Sunrise={this.state.Sunrise} Sunset={this.state.Sunset} Weather = {this.state.Weather}/>
      </div>
    );
  }
}
