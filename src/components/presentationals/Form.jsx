import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

class Form extends Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values){
    let edited = Object.assign({},values, {
      type: this.props.formType
    });
    console.log(edited);
  }

  render(){

    let extraFields = null;
    switch(this.props.formType){
    case "mailbox":
      extraFields = <Field name="pedestrianAccess" component="input" type="checkbox" />;
      break;
    }


    return(
      <form onSubmit={this.props.handleSubmit(this.submitForm)}>
        <Field name="address" component="input" placeholder="Your Address" className="form-control"/>
        <Field name="residenceType" className="form-control" component="select">
          <option />
          <option value="Business">Business Residence</option>
          <option value="Private">Private Residence</option>
        </Field>
        <Field name="electricalOutlet" className="form-control" component="select">
          <option />
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

Form.propTypes = {
  handleSubmit : PropTypes.func,
  formType: PropTypes.string
};

export default Form;
