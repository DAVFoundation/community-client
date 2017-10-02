import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Bounties extends Component {
  constructor(props){
    super(props);

    this.bounties = [
      {
        title: "add station",
        action: "addStation"
      },
      {
        title: "verify member",
        action: "verifyMember"
      }
    ];
  }

  render(){

    var bountyList = this.bounties.map((bounty, index) => {
      return <BountyItem key={index} title={bounty.title} />;
    });

    return(
      <div>
        <ul>{bountyList}</ul>
      </div>
    );
  }
}

class BountyItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li><button>{this.props.title}</button></li>
    );
  }

}

BountyItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default Bounties;


