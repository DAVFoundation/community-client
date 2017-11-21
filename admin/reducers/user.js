import {handleActions} from 'redux-actions';
import {getUserSuccess, getUserError} from '../actions';

const initialState = {
  authenticated: false,
  permissions: {}
};

export default handleActions({
  [getUserSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    edited.authenticated = true;
    edited.permissions = action.payload.permissions;
    console.log(edited);
    return edited;
  },

  [getUserError]: (state, action) => {
    return state;
  }
}, initialState);

