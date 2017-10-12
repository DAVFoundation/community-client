import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Bounties.css';
import {Button, ListItem} from './Common.jsx';

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
      return <ListItem key={index} title={bounty.title} icon={bounty.icon} tag={bounty.tag} action={this.openModal}/>;
    });

    return(
      <div>
        <h2 className="section-header">Earn DAV Tokens Through Open Bounties</h2>
        <ul id="bounty-list" className="list-inline">{bountyList}</ul>
      </div>
    );
  }
}

Bounties.propTypes = {
  bountyList: PropTypes.array,
  openModal: PropTypes.func,
};

export default Bounties;


