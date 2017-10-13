import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/NotificationBar.css';

class NotificationBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="notification-bar" className="col-12">
        <p>{this.props.description}</p>
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
