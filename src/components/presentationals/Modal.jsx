import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

class Modal extends Component {

  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.props.openModal({isOpen:true, modalType:"BOUNTY",modalProps:{}});
  }

  closeModal(){
    this.props.closeModal();
  }

  render(){
    return(
      <div>
        <button onClick={this.openModal}>OPen modal</button>
        <ReactModal
          isOpen={this.props.isOpen}
          onRequestClose={this.closeModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay">
          <h2>I am a modal</h2>
          <p> fill in stuff hereee </p>
        </ReactModal>

      </div>
    );
  }
}

Modal.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Modal;
