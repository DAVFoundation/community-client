import {handleActions} from 'redux-actions';
import {addBadge, addBadgeAsync} from '../actions';

const initialState = {
  badgeIds : [1,2],
  badgesById : {
    1 : {
      id: 1,
      img: "founder",
      title: "Founder"
    },
    2 : {
      id: 2,
      img : "contributor",
      title: "Contributor"
    }
  }
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
  [addBadge]: (state) => {
    console.log("add badge action in reducer");
    return state;
  },

  [addBadgeAsync]: (state) => {
    console.log("add badge async in reducer");
    return state;
  }
}, initialState);