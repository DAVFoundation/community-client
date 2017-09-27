import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badges extends Component {

  constructor(props){
    super(props);
    this.addBadge = this.addBadge.bind(this);
    this.addBadgeAsync = this.addBadgeAsync.bind(this);
  }

  addBadge(val){
    console.log("Add badge immediately");
    console.log(val);
    this.props.addBadge(val);
  }

  addBadgeAsync(e){
    console.log("Add badge async");
    this.props.getUserBadges();
  }

  render(){
    console.log(this.props);
    var badgeList = this.props.badgeIds.map(
      (badgeId, index) => (<BadgeIcon key={index} badgeDetails={this.props.badgesById[badgeId]} />)
    );

    return(
      <div>
        <ul>{badgeList}</ul>
        <Button onRootClick={this.addBadge} value={1} name="Add Badge1" />
        <Button onRootClick={this.addBadge} value={2} name="Add Badge2" />
        <button onClick={this.addBadgeAsync}>Add Badge Async</button>
      </div>
    );
  }
}

class Button extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (){
    this.props.onRootClick(this.props.value);
  }

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }
}

class BadgeIcon extends Component {

  render(){
    return (
      <li>{this.props.badgeDetails.title}</li>
    );
  }
}

Badges.propTypes = {
  badgeIds: PropTypes.array,
  badgesById: PropTypes.object,
  addBadge: PropTypes.func,
  getUserBadges: PropTypes.func
};

Button.propTypes = {
  onRootClick: PropTypes.func,
  value: PropTypes.number,
  name: PropTypes.string
};

BadgeIcon.propTypes = {
  badgeDetails: PropTypes.object.isRequired
};

export default Badges;
