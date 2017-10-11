import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import BountyModal from './BountyModal.jsx';
import {MODALTYPES} from '../../reducers/modals';

class Modal extends Component {

  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.setTab = this.setTab.bind(this);
  }

  closeModal(){
    this.props.closeModal();
  }

  setTab(tabIndex){
    this.props.selectTab(tabIndex);
  }

  render(){
    if(this.props.modalType==MODALTYPES.BOUNTY){
      return (<BountyModal
        isOpen={this.props.isOpen}
        closeModal={this.closeModal}
        openTab={this.props.modalProps.tab}
        setTab={this.setTab}
      />
      );
    } else {
      return null;
    }
  }
}

Modal.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  selectTab: PropTypes.func,
  isOpen: PropTypes.bool,
  modalType: PropTypes.string,
  modalProps: PropTypes.object
};

export default Modal;
