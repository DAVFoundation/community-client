import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

class BountyModal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ReactModal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay">
          <h2>Bounty Modal</h2>
          <p>Bounty Forms</p>
        </ReactModal>
      </div>
    );
  }
}

BountyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func
};

export default BountyModal;
