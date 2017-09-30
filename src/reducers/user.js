import {handleActions} from 'redux-actions';
import {getUserSuccess, getUserError} from '../actions';

const initialState = {};

export default handleActions({
  [getUserSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  },
  [getUserError]: (state, action) => {
    console.log(action.payload);
    console.log("error getting user");
    return state;
  }
}, initialState);
