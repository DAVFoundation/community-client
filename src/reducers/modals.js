import {handleActions} from 'redux-actions';
import {openModal, closeModal, selectTab} from '../actions';

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
  },

  [selectTab]: (state, action) => {
    let edited = Object.assign({}, state, {
      modalProps:{tab:action.payload}
    });
    return edited;
  }
}, initialState);

