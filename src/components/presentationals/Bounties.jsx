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
        <ul className="list-inline">{bountyList}</ul>
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
      <li className="list-inline-item">
        <Button onRootClick={this.doSomething} value={this.props.title} />
      </li>
    );
  }
}

class Button extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onRootClick(this.props.value);
  }

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}

Bounties.propTypes = {
  bountyList: PropTypes.array
};

BountyItem.propTypes = {
  title: PropTypes.string.isRequired
};

Button.propTypes = {
  onRootClick: PropTypes.func,
  value: PropTypes.string
};

export default Bounties;


