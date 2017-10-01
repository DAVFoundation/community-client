import {handleActions} from 'redux-actions';
import {getUserUpdatesSuccess} from '../actions';

const initialState = {
  updateIds : [],
  updatesById : {}
};

export default handleActions({
  [getUserUpdatesSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState);
