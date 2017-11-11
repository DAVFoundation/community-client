import {handleActions} from 'redux-actions';
import {getUserSuccess, getUserError} from '../actions';

const initialState = {
  authenticated: false
};

export default handleActions({
  [getUserSuccess]: (state, actions) => {
    let edited = Object.assign({}, state, action.payload);
    edited.authenticated = true;
    return edited;
  },

  [getUserError]: (state, actions) => {
    return state;
  }
}, initialState);

