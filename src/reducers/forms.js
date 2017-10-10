import {handleActions} from 'redux-actions';
import {submitStationFormSuccess, submitStationFormError} from '../actions';

const initialState = {
  success: null,
  error: null
};

export default handleActions({
  [submitStationFormSuccess]: (state, action) => {
    let edited = Object.assign({}, state, {
      success: action.payload
    });
    return edited;
  },

  [submitStationFormError]: (state, action) => {
    let edited = Object.assign({}, state, {
      success: action.payload
    });
    return edited;
  }
}, initialState);
