import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <h1>This is a form</h1>
    );
  }
}

export default Form;
