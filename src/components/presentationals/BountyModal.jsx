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
            <div className="col-12 modal-close-bar">
              <span className="close" onClick={this.props.closeModal}>&times;</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 ml-auto">
              <BountyHeader trigger={this.trigger} info={this.props.info} selectedTab={this.props.selectedTab} />
            </div>
            <div className="col-md-2"></div>
          </div>
          <FormContainer />
        </ReactModal>
      </div>
    );
  }
}

BountyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  setTab: PropTypes.func,
  info: PropTypes.array,
  selectedTab: PropTypes.string
};

export default BountyModal;
