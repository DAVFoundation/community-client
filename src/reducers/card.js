import {handleActions} from 'redux-actions';
import {getUserSuccess} from '../actions';

const initialState = {
  uid: "",
  name: "",
  balance: 0
};

export default handleActions({
  [getUserSuccess]: (state, action) => {
    console.log(action.payload);
    let edited = {};
    edited.uid = action.payload.account.uid;
    edited.name = action.payload.name;
    edited.balance = 0;
    return edited;
  }
}, initialState);
