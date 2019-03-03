import React, { Component } from 'react';

export default class LatLong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lat: '',
      Long: '',
    };
  }
  componentDidMount() {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          that.setState({
            Lat: position.coords.latitude,
            Long: position.coords.longitude,
          });
          that.props.onPass(that.state.Lat, that.state.Long);
        },
        error => {
          console.log('Error: ', error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }
  }
  render() {
    return <div />;
  }
}
