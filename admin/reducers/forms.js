import {handleActions} from 'redux-actions';
import {submitUpdateFormSuccess, submitUpdateFormError} from '../actions';

const initialState = {
  success: false,
  error: false
};

export default handleActions({
  [submitUpdateFormSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  },

  [submitUpdateFormError]: (state,action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState);
