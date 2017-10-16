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
    let dateOptions = {month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false};
    return (
      <li className='list-group-item'>
        <div className="update-image">
          <img src={this.props.details.avatar} />
        </div>
        <div className="update-user">
          <h5 className="update-title">{this.props.details.name}</h5>
          <p className="update-date">{d.toLocaleString('en-US', dateOptions)}</p>
        </div>
        <div className="update-description" dangerouslySetInnerHTML={{__html:this.props.details.description}} />
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
