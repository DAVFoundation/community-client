import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badges extends Component {

  render(){
    console.log(this.props);
    var badgeList = this.props.badgeIds.map(
      (badgeId, index) => (<BadgeIcon key={index} badgeDetails={this.props.badgesById[badgeId]} />)
    );

    return(
      <div>
        <ul>{badgeList}</ul>
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
  badgesById: PropTypes.object
};

BadgeIcon.propTypes = {
  badgeDetails: PropTypes.object.isRequired
};

export default Badges;