import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Badges.css';

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
        <ul className="badge-list list-inline">{badgeList}</ul>
        <h6 className="section-header badge-header">Earn more</h6>
        <ul className="badge-list list-inline">
          <li className="list-inline-item badge-item upcoming">
            <img src='../../static/images/contributor-badge.png' />
          </li>
        </ul>
      </div>
    );
  }
}


class BadgeIcon extends Component {

  render(){
    var imgSrc = `../../static/images/${this.props.details.title.toLowerCase()}-badge.png`;
    return (
      <li className="list-inline-item badge-item">
        <img src={imgSrc} />
      </li>
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
