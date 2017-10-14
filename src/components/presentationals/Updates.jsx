import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Updates.css';

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
        <ul id="update-list" className='list-group'>{updatelist}</ul>
      </div>
    );
  }
}

class UpdateItem extends Component {

  constructor(props){
    super(props);
  }

  render(){
    var d = new Date(this.props.details.createdAt);
    return (
      <li className='list-group-item'>
        <div className="update-image">
          <img src={this.props.details.avatar} />
        </div>
        <div className="update-user">
          <h5 className="update-title">{this.props.details.name}</h5>
          <p className="update-date">{d.toUTCString()}</p>
        </div>
        <p className="update-description">{this.props.details.description}</p>
      </li>
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
