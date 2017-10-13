import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Bounties.css';
import {Button, ListItem} from './Common.jsx';
import BountyHeader from './BountyHeader.jsx';

class Bounties extends Component {

  constructor(props){
    super(props);
    this.trigger = this.trigger.bind(this);
  }

  trigger(tag){
    //OPEN MODAL
    this.props.openModal({isOpen:true, modalType:"BOUNTY",modalProps:{tab:tag}});
  }

  render(){

    return(
      <div>
        <h2 className="section-header">Earn DAV Tokens Through Open Bounties</h2>
        <BountyHeader trigger={this.trigger} info={this.props.bountyList} />
      </div>
    );
  }
}

Bounties.propTypes = {
  bountyList: PropTypes.array,
  openModal: PropTypes.func,
};

export default Bounties;


