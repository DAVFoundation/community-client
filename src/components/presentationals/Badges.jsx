import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badges extends Component {

  constructor(props){
    super(props);
    this.addBadge = this.addBadge.bind(this);
    this.addBadgeAsync = this.addBadgeAsync.bind(this);
  }

  componentDidMount(){
    console.log("badge component is mounted");
    this.props.getUserBadges();
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

    var badgeList = this.props.badgeIds.map(
      (badgeId, index) => (<BadgeIcon key={index} details={this.props.badgesById[badgeId]} />)
    );

    return(
      <div>
        <ul className="list-inline">{badgeList}</ul>
      </div>
    );
  }
}


class BadgeIcon extends Component {

  render(){
    return (
      <li className="list-inline-item">{this.props.details.title}</li>
    );
  }
}

Badges.propTypes = {
  badgeIds: PropTypes.array,
  badgesById: PropTypes.object,
  addBadge: PropTypes.func,
  getUserBadges: PropTypes.func
};


BadgeIcon.propTypes = {
  details: PropTypes.object.isRequired
};

export default Badges;
