import {handleActions} from 'redux-actions';

const initialState = {
  bountyList:[
    {
      title: "My home has a backyard",
      action: "setupCharging",
      icon: "backyard.png",
      tag: "backyard"
    },
    {
      title: "My home has a roof I can use",
      action: "setupParking",
      icon: "roof.png",
      tag: "roof"
    },
    {
      title: "I have a driveway I can share",
      action: "setupMailbox",
      icon: "driveway.png",
      tag: "driveway"
    },
    {
      title: "I can place a mailbox outside my home",
      action: "setupVerifyMember",
      icon: "mailbox.png",
      tag: "mailbox"
    }
  ]
};

export default handleActions({}, initialState);
