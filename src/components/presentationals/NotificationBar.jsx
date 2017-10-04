import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/NotificationBar.css';

class NotificationBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="notification-bar" className="col-md-12">
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <button className="notification-button">{this.props.action}</button>
      </div>
    );
  }
}

NotificationBar.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string
};

export default NotificationBar;
