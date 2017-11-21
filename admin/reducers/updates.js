import {handleActions} from 'redux-actions';
import {getDavUpdatesSuccess, deleteDavUpdateSuccess} from '../actions';

const initialState = {
  updates: []
};

export default handleActions({
  [getDavUpdatesSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    console.log(edited);
    return edited;
  },

  [deleteDavUpdateSuccess]: (state, action) => {
    let remainingUpdates = state.updates.filter((obj) => {
      return obj._id != action.payload.id;
    });
    let edited = {};
    edited.updates = remainingUpdates;
    return edited;
  }
}, initialState);
