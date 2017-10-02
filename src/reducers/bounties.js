import {handleActions} from 'redux-actions';

const initialState = {
  bountyList:[
    {
      title: "add station",
      action: "addStation"
    },
    {
      title: "verify member",
      action: "verifyMember"
    }
  ]
};

export default handleActions({}, initialState);
