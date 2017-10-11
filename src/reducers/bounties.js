import {handleActions} from 'redux-actions';

const initialState = {
  bountyList:[
    {
      title: "Earn with DAV Charging",
      action: "setupCharging",
      icon: "station.png",
      tag: "backyard"
    },
    {
      title: "Earn with DAV Parking",
      action: "setupParking",
      icon: "verify.png",
      tag: "roof"
    },
    {
      title: "Earn with DAV Mailbox",
      action: "setupMailbox",
      icon: "parking.png",
      tag: "driveway"
    },
    {
      title: "Verify Other Member Info",
      action: "setupVerifyMember",
      icon: "mailbox.png",
      tag: "mailbox"
    }
  ]
};

export default handleActions({}, initialState);
