import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm, SubmissionError} from 'redux-form';

class Form extends Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values){
    let edited = Object.assign({},values, {
      type: this.props.formType
    });
    console.log(edited);

    return new Promise((resolve, reject) => {
      //dispatch action
      this.props.submitStationForm({edited, resolve, reject});
    }).catch(error => {
      throw new SubmissionError(error);
    });
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
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <Field name="address" component="input" placeholder="Your Address" className="form-control"/>
        <Field name="custom" component={this.customField} />
        <Field name="residenceType" className="form-control" component="select">
          <option value="Private">Private Residence</option>
          <option value="Business">Business Residence</option>
        </Field>
        <Field name="electricalOutlet" className="form-control" component="select">
          <option value="<10m">&lt;10m</option>
          <option value="10-20">10m-20m</option>
          <option value=">20m">&gt;20m</option>
          <option value="none">None</option>
        </Field>
        {extraFields}
        <button type="submit">Submit</button>
      </form>
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
  formType: PropTypes.string,
  submitStationForm: PropTypes.func,
  reset: PropTypes.func
};

export default Form;
