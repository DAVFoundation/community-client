import {handleActions} from 'redux-actions';

const initialState = {
  title: "Welcome Aboard",
  description: "This is the notification text message",
  action: "Do stuff"
};

export default handleActions({}, initialState);
