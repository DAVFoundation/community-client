import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Bounties.css';

class Bounties extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
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
        <Button onRootClick={this.doSomething} value={this.props.title} icon={this.props.icon}/>
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
    var imgSrc = `../../static/images/${this.props.icon}`;
    return (
      <div>
        <a href="#" onClick={this.handleClick}>
          <img src={imgSrc} />
        </a>
        <p className="bounty-title">{this.props.value}</p>
      </div>
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

Button.propTypes = {
  onRootClick: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.string
};

export default Bounties;


