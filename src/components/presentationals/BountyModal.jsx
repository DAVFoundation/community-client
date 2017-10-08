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

    let para = null;

    switch(this.props.openTab){
    case "station":
      para=<FormContainer/>;
      break;
    case "mailbox":
      para=<FormContainer/>;
      break;
    case "3":
      break;
    case "4":
      break;
    default:
      para=<p>Tab 1</p>;
    }

    return(
      <div>
        <ReactModal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.closeModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay">
          <BountyModalHeader setTab={this.setTab}/>
          {para}
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
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="" value="station" icon="station.png"/></li>
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="" value="mailbox" icon="mailbox.png"/></li>
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
