import {handleActions} from 'redux-actions';
import {addBadge, getUserBadgesSuccess} from '../actions';

const initialState = {
  badgeIds : [],
  badgesById : {}
};

function BadgeReducer(state=initialState, action){
  switch(action.type){

  case 'ADD_BADGE':
    return state;

  case 'REMOVE_BADGE':
    return state;

  default:
    return state;
  }
}

export default handleActions({
  [addBadge]: (state, action) => {
    console.log(action);
    let edited = Object.assign({}, state, {
      badgeIds: [action.payload,action.payload]
    });
    return edited;
  },

  [getUserBadgesSuccess]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  }

}, initialState);
