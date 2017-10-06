import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

class Form extends Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values){
    console.log(values);
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.submitForm)}>
        <Field name="firstName" component="input"/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit : PropTypes.func
};

export default Form;
