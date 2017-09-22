
const initialState = {
  badges : [1,2],
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

function BadgeReducer(state=initialState){

  return state
}

export default BadgeReducer