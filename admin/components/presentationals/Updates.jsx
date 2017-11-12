import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Updates extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h2>Update List</h2>
      </div>
    );
  }
}

Updates.propTypes = {
  updates: PropTypes.array,
  getDavUpdates: PropTypes.func
};

export default Updates;
