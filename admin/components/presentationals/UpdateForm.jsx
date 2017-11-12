import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UpdateForm extends Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values){
    console.log("submit");
  }

  handleKeyDown(e){
    if(e.key=='Enter' && e.shiftKey === false){
      e.preventDefault();
    }
  }

  render(){
    if(this.props.permissions){
      if(!this.props.permissions.canAccessAdmin){
        return null;
      }
    }

    return(
      <div>
        <h1>UPDATE FORM</h1>
      </div>
    );
  }

}

export const validate = (values) => {

};

UpdateForm.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  submitUpdateForm: PropTypes.func,
  permissions: PropTypes.object
};

export default UpdateForm;
