import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import FormContainer from '../containers/FormContainer.jsx';
import BountyHeader from './BountyHeader.jsx';
import '../../static/css/BountyModal.css';
import '../../static/css/Bounties.css';

class BountyModal extends Component {
  constructor(props){
    super(props);
    this.trigger = this.trigger.bind(this);
  }

  trigger(tag) {
    // SELECT TAB
    this.props.setTab(tag);
  }

  render(){
    return(
      <div>
        <ReactModal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay">
          <div className="row">
            <div className="col-md-8 ml-auto">
              <BountyHeader trigger={this.trigger} info={this.props.info} />
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <FormContainer/>
            </div>
            <div className="col-md-4"></div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

BountyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  setTab: PropTypes.func,
  info: PropTypes.array
};

export default BountyModal;
