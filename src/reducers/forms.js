import {handleActions} from 'redux-actions';
import {submitStationFormSuccess, submitStationFormError} from '../actions';

const initialState = {
  roof: false,
  backyard: false,
  driveway: false,
  mailbox: false,
  success: false,
  error:false
};

export default handleActions({
  [submitStationFormSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    console.log("FORM SUBMIT SUCCESS ACTION");
    console.log(edited);
    return edited;
  },

  [submitStationFormError]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState);
