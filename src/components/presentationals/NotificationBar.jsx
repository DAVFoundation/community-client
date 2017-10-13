import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/NotificationBar.css';

class NotificationBar extends Component {

  constructor(props){
    super(props);
    this.hideNot = this.hideNot.bind(this);
  }

  hideNot(e){
    e.preventDefault();
    this.props.hideNotification();
  }

  render(){
    if(!this.props.visible){
      return null;
    }

    return(
      <div id="notification-bar" className="col-12">
        <p>{this.props.description}</p>
        <a onClick={this.props.hideNotification}>
          <span className="close">&times;</span>
        </a>
      </div>
    );
  }
}

NotificationBar.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  visible: PropTypes.bool,
  hideNotification: PropTypes.func
};

export default NotificationBar;
