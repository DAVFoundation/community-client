import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, SubmissionError} from 'redux-form';
import AddressMap from './AddressMap.jsx';

class Form extends Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.setAddressInputRef = this.setAddressInputRef.bind(this);
    this.addressField = this.addressField.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.geocodeAddress = this.geocodeAddress.bind(this);

    this.google = window.google;

    this.state = {
      currentLocation: this.props.initialCenter
    };
  }

  componentDidMount(){
    this.props.change("type", this.props.formType);
    if(navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
    }
    this.initMap();
  }

  initMap(){
    const maps = this.google.maps;


    this.autocomplete = new maps.places.Autocomplete(this.addressInput, {types: ['geocode']});
    this.autocomplete.addListener('place_changed', this.setLocation);

    this.geocoder = new maps.Geocoder();
  }

  setLocation(){
    let place = this.autocomplete.getPlace();
    console.log(place);
    //this.props.form["station-form"].values.address = place.formatted_address;
    this.props.change('address', place.formatted_address);
    console.log(this.addressField.value);

    this.geocodeAddress(place.formatted_address);
  }

  geocodeAddress(address){
    this.geocoder.geocode({'address':address}, (results, status) => {
      if(status == 'OK'){
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();
        this.setState({
          currentLocation:{
            lat:lat,
            lng:lng
          }
        });
        this.props.change('lat', lat);
        this.props.change('lng', lng);
      } else {
        console.log("Error finding address");
        this.setState({
          currentLocation: this.props.errorCenter
        });
      }
    });
  }

  submit(values){
    return new Promise((resolve, reject) => {
      //dispatch action
      this.props.submitStationForm({values, resolve, reject});
    }).catch(error => {
      throw new SubmissionError(error);
    });
  }

  setAddressInputRef(inputRef){
    this.addressInput = inputRef;
  }

  customField({input,label, meta: {touched, error}, ...custom}){
    const hasError = touched && error !== undefined;
    console.log(touched);
    console.log(error);
    console.log(hasError);
    return(
      <div>
        {hasError && "ERROR"}
      </div>
    );
  }

  hiddenField({input, meta: {touched, error},...custom}){
    return(
      <div>
        <input type="hidden" {...input} {...custom}/>
      </div>
    );
  }

  addressField({input, label, meta:{touched, error}, ...custom}){
    return(
      <div>
        <input className="form-control" ref={this.setAddressInputRef} type="text" {...input} {...custom} placeholder={label}/>
      </div>
    );
  }

  render(){

    let extraFields = null;
    switch(this.props.formType){
    case "mailbox":
      extraFields = (
        <div>
          <label htmlFor="ped">Public Pedestrian Access?</label>
          <Field name="pedestrianAccess" id="ped" component="input" type="checkbox" />
        </div>);
      break;
    case "driveway":
      extraFields = (
        <div>
          <label htmlFor="drive">Public Driveway Access?</label>
          <Field name="drivewayAccess" id="drive" component="input" type="checkbox" />
        </div>);
      break;
    }


    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <Field name="address" component={this.addressField} label="Enter Address"/>
          <Field name="lat" component={this.hiddenField} />
          <Field name="lng" component={this.hiddenField} />
          <Field name="type" component={this.hiddenField} />
          <AddressMap center={this.state.currentLocation} />
          <Field name="custom" component={this.customField} />
          <Field name="residenceType" className="form-control" component="select">
            <option value="">Please select one</option>
            <option value="Private">Private Residence</option>
            <option value="Business">Business Residence</option>
          </Field>
          <Field name="electricalOutlet" className="form-control" component="select">
            <option value="">Please select one</option>
            <option value="<10m">&lt;10m</option>
            <option value="10-20">10m-20m</option>
            <option value=">20m">&gt;20m</option>
            <option value="none">None</option>
          </Field>
          {extraFields}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export const validate = (values) => {
  const errors = {};
  if(!values.address || values.address.trim() == ''){
    errors.custom = 'Address Required'; // name should be same as form field name
  }
  console.log(errors);
  return errors;
};

Form.propTypes = {
  handleSubmit : PropTypes.func,
  change: PropTypes.func,
  formType: PropTypes.string,
  submitStationForm: PropTypes.func,
  reset: PropTypes.func,
  initialCenter:PropTypes.object,
  errorCenter: PropTypes.object
};

Form.defaultProps = {
  initialCenter: {
    lat:40.730610,
    lng:-73.935242
  },
  errorCenter: {
    lat:29.532804,
    lng:-55.491477
  }
};


export default Form;
