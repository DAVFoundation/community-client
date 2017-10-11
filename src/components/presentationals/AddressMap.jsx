import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddressMap extends Component{

  constructor(props){
    super(props);
    this.google = window.google;
    this.setMapElementRef = this.setMapElementRef.bind(this);
  }

  componentDidMount(){
    this.loadMap();
  }

  setMapElementRef(mapElementRef){
    this.mapElement = mapElementRef;
  }

  loadMap(){
    const maps = this.google.maps;

    this.map = new maps.Map(this.mapElement, {
      center: this.props.initialCenter,
      zoom: this.props.zoom
    });

    this.marker = new maps.Marker({
      map: this.map,
      position: this.props.initialCenter
    });

    this.geocoder = new maps.Geocoder();
  }

  render(){
    return(
      <div className="map" ref={this.setMapElementRef}></div>
    );
  }
}

AddressMap.propTypes = {
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
};

AddressMap.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat:40.730610,
    lng:-73.935242
  }
};

export default AddressMap;
