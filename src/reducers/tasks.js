import {handleActions} from 'redux-actions';

const initialState = {
  taskIds: [1,2,3,4,5],
  tasksById: {
    1: {
      title: "Create DAV user",
      status: "complete"
    },
    2: {
      title: "Follow DAV on social media",
      status: "incomplete"
    },
    3: {
      title: "Examine coverage around you",
      status: "incomplete"
    },
    4: {
      title: "Describe your neighbourhood",
      status: "incomplete"
    },
    5: {
      title: "Earn bounties",
      status: "incomplete"
    },
  }
};

export default handleActions({}, initialState);
