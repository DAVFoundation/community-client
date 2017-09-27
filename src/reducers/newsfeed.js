import {handleActions} from 'redux-actions';
import {getUserNewsFeedSuccess} from '../actions';

const initialState = {
  newsIds : [],
  newsById : {}
};

export default handleActions({
  [getUserNewsFeedSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }
}, initialState);
