import {handleActions} from 'redux-actions';
import {hideNotification} from '../actions';

const initialState = {
  title: "Welcome Aboard",
  description: "This is the notification text message",
  action: "Do stuff",
  visible: true
};

export default handleActions({
  [hideNotification]: (state, action) => {
    let edited = Object.assign({}, state, {
      visible: false
    });
    return edited;
  }
}, initialState);
