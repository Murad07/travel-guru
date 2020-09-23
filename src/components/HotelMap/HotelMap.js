import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const HotelMap = (props) => {
  //   static defaultProps = {
  //     center: {
  //       lat: 20.85817,
  //       lng: 92.288933,
  //     },
  //     zoom: 11,
  //   };

  //   render() {
  console.log('on map: ', props.latLng[0]);
  const center = {
    lat: props.latLng[0],
    lng: props.latLng[1],
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD3N9Tx-3S_a3WSN-li7cGc_mIyVqImqmc' }}
        defaultCenter={center}
        defaultZoom={8}
      ></GoogleMapReact>
    </div>
  );
};
// }

export default HotelMap;
