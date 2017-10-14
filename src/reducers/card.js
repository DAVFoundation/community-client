import {handleActions} from 'redux-actions';
import {getUserSuccess} from '../actions';

const initialState = {
  uid: "",
  name: "",
  balance: 0,
  avatar:""
};

export default handleActions({
  [getUserSuccess]: (state, action) => {
    let edited = {};
    edited.uid = action.payload.account.uid;
    edited.name = action.payload.name;
    edited.balance = 0;
    edited.avatar = action.payload.avatar;
    return edited;
  }
}, initialState);
