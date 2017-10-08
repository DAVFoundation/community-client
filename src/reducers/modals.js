import {handleActions} from 'redux-actions';
import {openModal, closeModal} from '../actions';

const initialState = {
  isOpen: false,
  modalType: "",
  modalProps: {}
};

export const MODALTYPES = {
  LOGIN: "LOGIN",
  BOUNTY: "BOUNTY"
};

export default handleActions({
  [openModal]: (state, action) => {
    let edited = Object.assign({}, state, action.payload);
    return edited;
  },

  [closeModal]: (state, action) => {
    return initialState;
  }
}, initialState);

