import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/AddressMap.css';

class AddressMap extends Component{

  constructor(props){
    super(props);
    this.google = window.google;
    this.setMapElementRef = this.setMapElementRef.bind(this);
    this.setMarker = this.setMarker.bind(this);
  }

  componentDidMount(){
    this.loadMap();
  }

  componentDidUpdate(prevProps){
    if(prevProps.center !== this.props.center){
      this.recenterMap();
    }
  }

  recenterMap(){
    const maps = this.google.maps;
    const curr = this.props.center;

    if(this.map){
      let center = new maps.LatLng(curr.lat, curr.lng);
      this.map.panTo(center);
    }

    this.setMarker();
  }

  setMarker(){
    const maps = this.google.maps;

    this.marker = new maps.Marker({
      map: this.map,
      position: this.props.center
    });
  }

  setMapElementRef(mapElementRef){
    this.mapElement = mapElementRef;
  }

  loadMap(){
    const maps = this.google.maps;

    this.map = new maps.Map(this.mapElement, {
      center: this.props.center,
      zoom: this.props.zoom
    });

    this.setMarker();
  }

  render(){
    return(
      <div className="address-map" ref={this.setMapElementRef}></div>
    );
  }
}

AddressMap.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool
};

AddressMap.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat:40.730610,
    lng:-73.935242
  },
  centerAroundCurrentLocation: false
};

export default AddressMap;
