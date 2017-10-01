import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Updates extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUserUpdates();
  }

  render(){

    var updatelist = this.props.updateIds.map(
      (updateId, index) => (<UpdateItem key={index} details={this.props.updatesById[updateId]} />)
    );

    return(
      <div>
        <ul>{updatelist}</ul>
      </div>
    );
  }
}

class UpdateItem extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>{this.props.details.description}</li>
    );
  }
}

Updates.propTypes = {
  updateIds: PropTypes.array,
  updatesById: PropTypes.object,
  getUserUpdates: PropTypes.func
};

UpdateItem.propTypes = {
  details: PropTypes.object.isRequired
};

export default Updates;
