import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Bounties.css';
import {Button} from './Common.jsx';

class Bounties extends Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(tab){
    console.log(tab);
    this.props.openModal({isOpen:true, modalType:"BOUNTY",modalProps:{tab:tab}});
  }

  render(){
    var bountyList = this.props.bountyList.map((bounty, index) => {
      return <BountyItem key={index} title={bounty.title} icon={bounty.icon} tag={bounty.tag} action={this.openModal}/>;
    });

    return(
      <div>
        <h2 className="section-header">Earn DAV Tokens Through Open Bounties</h2>
        <ul id="bounty-list" className="list-inline">{bountyList}</ul>
      </div>
    );
  }
}

class BountyItem extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }

  click(){
    this.props.action(this.props.tag);
  }

  render(){
    return(
      <li className="list-inline-item text-center">
        <Button onRootClick={this.click} title={this.props.title} value={this.props.tag} icon={this.props.icon}/>
      </li>
    );
  }
}

Bounties.propTypes = {
  bountyList: PropTypes.array,
  openModal: PropTypes.func,
};

BountyItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  action: PropTypes.func,
  tag: PropTypes.string
};




export default Bounties;


