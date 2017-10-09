import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {Button} from './Common.jsx';
import FormContainer from '../containers/FormContainer.jsx';

class BountyModal extends Component {
  constructor(props){
    super(props);
    this.setTab = this.setTab.bind(this);
  }

  setTab(val) {
    this.props.setTab(val);
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
            <div className="col-12">
              <BountyModalHeader setTab={this.setTab}/>
            </div>
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

class BountyModalHeader extends Component {
  constructor(props){
    super(props);
    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(val){
    this.props.setTab(val);
  }

  render(){
    return(
      <div>
        <ul className="list-inline text-center">
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="Backyard" value="backyard" icon="station.png"/></li>
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="Roof" value="roof" icon="verify.png"/></li>
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="Driveway" value="driveway" icon="parking.png"/></li>
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="Mailbox" value="mailbox" icon="mailbox.png"/></li>
        </ul>
      </div>
    );
  }
}

BountyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openTab: PropTypes.string,
  setTab: PropTypes.func
};

BountyModalHeader.propTypes = {
  setTab: PropTypes.func
};

export default BountyModal;
