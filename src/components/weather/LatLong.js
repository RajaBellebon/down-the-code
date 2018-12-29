import React, { Component } from 'react';

export default class LatLong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lat: 'Loading',
      Long: 'Loading',
    };
  }
  componentDidMount() {
    let that = this;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        that.setState({
          Lat: position.coords.latitude,
          Long: position.coords.longitude,
        });
        that.props.onPass(that.state.Lat, that.state.Long);
      },
      function(error) {},
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  render() {
    return <div />;
  }
}
