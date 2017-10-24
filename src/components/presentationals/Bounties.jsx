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

  trigger(tab){
    //OPEN MODAL
    this.props.openModal({isOpen:true, modalType:"BOUNTY",modalProps:{tab:tab}});
  }

  render(){

    return(
      <div>
        <h2 className="section-header">Earn DAV Tokens Through Open Bounties</h2>
        <BountyHeader trigger={this.trigger} hasStation={this.props.hasStation} info={this.props.bountyList} setLocalState={false}/>
      </div>
    );
  }
}

Bounties.propTypes = {
  bountyList: PropTypes.array,
  openModal: PropTypes.func,
  hasStation: PropTypes.object
};

export default Bounties;


