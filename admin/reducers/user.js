import {handleActions} from 'redux-actions';
import {getUserSuccess, getUserError} from '../actions';

const initialState = {
  authenticated: false
};

export default handleActions({
  [getUserSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    edited.authenticated = true;
    console.log(edited);
    return edited;
  },

  [getUserError]: (state, action) => {
    return state;
  }
}, initialState);

