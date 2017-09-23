import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badges extends Component {

  constructor(props){
    super(props);
    this.addBadge = this.addBadge.bind(this);
    this.addBadgeAsync = this.addBadgeAsync.bind(this);
  }

  addBadge(e){
    console.log("Add badge immediately");
    this.props.addBadge();
  }

  addBadgeAsync(e){
    console.log("Add badge async");
    this.props.addBadgeAsync();
  }

  render(){
    console.log(this.props);
    var badgeList = this.props.badgeIds.map(
      (badgeId, index) => (<BadgeIcon key={index} badgeDetails={this.props.badgesById[badgeId]} />)
    );

    return(
      <div>
        <ul>{badgeList}</ul>
        <button onClick={this.addBadge}>Add Badge</button>
        <button onClick={this.addBadgeAsync}>Add Badge Async</button>
      </div>
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
  addBadgeAsync: PropTypes.func
};

BadgeIcon.propTypes = {
  badgeDetails: PropTypes.object.isRequired
};

export default Badges;