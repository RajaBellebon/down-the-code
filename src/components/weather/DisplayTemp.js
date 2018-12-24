import React, { Component } from 'react';
const Data = require('./helper');


export default class DisplayTemp extends Component{
  render(){
      const { 
        Country,
        Lat,
        Long,
        Temp,
        TempMin,
        TempMax,
        Sunrise,
        Sunset,
        Weather,
        Name } = this.props;
      
      if(Temp === 'Loading'){
        return <div className='loading'>Loading Your Local Weather...</div>
      }
      else {
        const emoji = Data.feeling(Temp);
        const weatherEmoji = Data.weatherEmoji(Weather.main);
        let sunrise = Sunrise ? new Date(Sunrise).toLocaleTimeString(): '';
        let sunset = Sunset ? new Date(Sunset).toLocaleTimeString(): '';
        return(
          <div className='display-weather'>
            <table styles={{width:'100%'}}>
              <tbody>
                <tr key={0}>
                  <th>Country</th>
                  <th>City</th> 
                  <th>Weather</th>
                </tr>
                <tr key={1}>
                  <td>{Country}</td>
                  <td>{Name}</td>
                  <td>Most of the day: {Weather.main}</td>
                </tr>
                <tr key={2}>
                  <td>Latitude: {Lat} Longiture: {Long}</td>
                  <td>You should feel {emoji} with this temperature</td>
                  <td> At the moment: {Weather.description} {weatherEmoji}</td>
                </tr>
                <tr key={3}>
                  <td>Sunrise: {sunrise} am - Sunset: {sunset} pm</td>
                  <td>In Sydney, it is currently: {Temp}°C</td>
                  <td>The temperature will be between {TempMin}°C - {TempMax}°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }
  }
};
