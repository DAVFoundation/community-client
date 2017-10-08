import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {Button} from './Common.jsx';

class BountyModal extends Component {
  constructor(props){
    super(props);
    this.state = {tab: this.props.openTab};
    this.setTab = this.setTab.bind(this);
  }

  setTab(val) {
    this.setState({tab:val});
  }

  render(){

    let para = null;
    if(this.state.tab == "1"){
      para = <p>Tab 1</p>;
    } else if(this.state.tab == "2"){
      para = <p>Tab 2</p>;
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
    console.log(props);
    console.log(this.props.setTab);
    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(val){
    this.props.setTab(val);
  }

  render(){
    return(
      <div>
        <ul className="list-inline text-center">
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="" value="1" icon="mailbox.png"/></li>
          <li className="list-inline-item"><Button onRootClick={this.setSelectedTab} title="" value="2" icon="station.png"/></li>
        </ul>
      </div>
    );
  }
}

BountyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openTab: PropTypes.string
};

BountyModalHeader.propTypes = {
  setTab: PropTypes.func
};

export default BountyModal;
