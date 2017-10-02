import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Bounties extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    var bountyList = this.props.bountyList.map((bounty, index) => {
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

Bounties.propTypes = {
  bountyList: PropTypes.array
};

BountyItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default Bounties;


