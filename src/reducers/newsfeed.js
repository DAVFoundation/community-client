import {handleActions} from 'redux-actions';
import {getUserNewsFeedSuccess} from '../actions';

const initialState = {
  updateIds : [],
  updatesById : {}
};

export default handleActions({
  [getUserNewsFeedSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState);
