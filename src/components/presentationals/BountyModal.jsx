import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {Button, ListItem} from './Common.jsx';
import FormContainer from '../containers/FormContainer.jsx';
import '../../static/css/BountyModal.css';

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
              <BountyModalHeader setTab={this.setTab} info={this.props.info}/>
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

  setSelectedTab(tag){
    this.props.setTab(tag);
  }

  render(){

    var bountyList = this.props.info.map((bounty, index) => {
      return (<ListItem key={index} title={bounty.title} icon={bounty.icon} tag={bounty.tag} action={this.setSelectedTab} />);
    });

    return(
      <div>
        <ul id="bounty-modal-header" className="list-inline text-center">{bountyList}</ul>
      </div>
    );
  }
}


BountyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openTab: PropTypes.string,
  setTab: PropTypes.func,
  info: PropTypes.array
};

BountyModalHeader.propTypes = {
  setTab: PropTypes.func,
  info: PropTypes.array
};

export default BountyModal;
