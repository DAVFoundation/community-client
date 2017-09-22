import {handleActions} from 'redux-actions'
import {addBadge} from '../actions'

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
}

function BadgeReducer(state=initialState, action){
  switch(action.type){

  case 'ADD_BADGE':
    return state

  case 'REMOVE_BADGE':
    return state

  default:
    return state
  }
}

const reducer = handleActions({
  [addBadge]: (state) => {
    return state
  }
}, initialState)


export default BadgeReducer