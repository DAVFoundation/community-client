import {handleActions} from 'redux-actions';
import {getDavUpdatesSuccess, deleteDavUpdateSuccess} from '../actions';

const initialState = {
  updates: []
};

export default handleActions({
  [getDavUpdatesSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  },

  [deleteDavUpdateSuccess]: (state, action) => {
    console.log(action.payload);

    return state;
  }
}, initialState);
