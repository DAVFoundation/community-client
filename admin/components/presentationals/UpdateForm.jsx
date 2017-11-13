import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, SubmissionError} from 'redux-form';
import '../../static/css/UpdateForm.css';

class UpdateForm extends Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);

    this.state = {
      formSuccess: false,
      formError: false
    };
  }

  submit(values){
    console.log(values);
    return new Promise((resolve, reject) => {
      this.props.submitUpdateForm({values, resolve, reject});
    }).then(res => {
      this.props.reset();
      this.setState({
        formSuccess: true,
        formError: false
      });

      setTimeout(() => {
        this.setState({
          formSuccess: false
        });
      }, 1500);
    }).catch(error => {
      this.setState({
        formError: true
      });
    });
  }

  handleKeyDown(e){
    if(e.key=='Enter' && e.shiftKey === false){
      e.preventDefault();
    }
  }

  errorField({input, label, meta: {touched,error}, ...custom}){
    const hasError = touched && error != undefined;
    return(
      <div className="form-error">
        {hasError && error}
      </div>
    );
  }

  render(){
    if(this.props.permissions){
      if(!this.props.permissions.canAccessAdmin){
        return null;
      }
    }

    return(
      <div className="col-md-6">
        <h2 className="section-header">Add Update</h2>
        <div id="form-wrapper">
          <form onSubmit={this.props.handleSubmit(this.submit)} onKeyDown={(e) => {this.handleKeyDown(e);}}>
            <Field name="createdAt" className="form-control" component="input" type="datetime-local" />
            <Field name="description" className="form-control" component="textarea" type="text" placeholder="Description"/>
            <Field name="link" className="form-control" component="input" type="text" placeholder="Link (optional)"/>
            <Field name="error" component={this.errorField} />
            <div className="form-error">{(this.state.formError ? "Error submitting. Please try again" : null)}</div>
            <button type="submit" disabled={this.props.submitting} className="btn btn-custom">{(this.state.formSuccess ? "Added!" : "Add Update")}</button>
          </form>
        </div>
      </div>
    );
  }

}

export const validate = (values) => {
  const errors = {};
  errors.error = '';

  if(!values.description || values.description.trim() == ''){
    errors.error += 'Description required ';
  }

  if(values.link && !/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/i.test(values.link)){
    errors.error += 'Invalid link ';
  }

  return errors;
};

UpdateForm.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  submitting: PropTypes.bool,
  submitUpdateForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  permissions: PropTypes.object
};

export default UpdateForm;
