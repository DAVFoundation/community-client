import {handleActions} from 'redux-actions';

const initialState = {
  taskIds: [1,2],
  tasksById: {
    1: {
      title: "sign up",
      status: "incomplete"
    },
    2: {
      title: "like on social media",
      status: "incomplete"
    }
  }
};

export default handleActions({}, initialState);
