import {handleActions} from 'redux-actions';

const initialState = {
  bountyList:[
    {
      title: "Earn with DAV Charging",
      action: "setupCharging",
      icon: "station.png"
    },
    {
      title: "Earn with DAV Parking",
      action: "setupParking",
      icon: "parking.png"
    },
    {
      title: "Earn with DAV Mailbox",
      action: "setupMailbox",
      icon: "mailbox.png"
    },
    {
      title: "Verify Other Member Info",
      action: "setupVerifyMember",
      icon: "verify.png"
    }
  ]
};

export default handleActions({}, initialState);
