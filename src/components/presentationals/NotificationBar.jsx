import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NotificationBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h4>Welcome Aboard</h4>
        <p>This is the notification text message</p>
        <button>Do stuff</button>
      </div>
    );
  }
}

export default NotificationBar;
