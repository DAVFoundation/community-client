import {handleActions} from 'redux-actions';
import {getDavUpdatesSuccess} from '../actions';

const initialState = {
  updates: []
};

export default handleActions({
  [getDavUpdatesSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState)
