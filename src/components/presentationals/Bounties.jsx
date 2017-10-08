import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Bounties.css';
import {Button} from './Common.jsx';

class Bounties extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var bountyList = this.props.bountyList.map((bounty, index) => {
      return <BountyItem key={index} title={bounty.title} icon={bounty.icon}/>;
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
    this.doSomething = this.doSomething.bind(this);
  }

  doSomething(action){
    console.log(action);
  }

  render(){
    return(
      <li className="list-inline-item text-center">
        <Button onRootClick={this.doSomething} title={this.props.title} value={this.props.title} icon={this.props.icon}/>
      </li>
    );
  }
}

Bounties.propTypes = {
  bountyList: PropTypes.array
};

BountyItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  action: PropTypes.string
};




export default Bounties;


