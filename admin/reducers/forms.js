import {handleActions} from 'redux-actions';
import {submitUpdateFormSuccess, submitUpdateFormError} from '../actions';

const initialState = {

};

export default handleActions({
  [submitUpdateFormSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  },

  [submitStationFormError]: (state,action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState);
