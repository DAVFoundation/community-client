import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Badges extends Component {

  render(){
    var self = this;
    console.log(this.props.stateProps);
    console.log(this.props.stateProps.BadgeReducer.badgeIds);
    var badgeList = this.props.stateProps.BadgeReducer.badgeIds.map(function(badgeId, index){
      return <BadgeIcon key={index} badgeDetails={self.props.stateProps.BadgeReducer.badgesById[badgeId]} />;
    });

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
  stateProps: PropTypes.object.isRequired
};

BadgeIcon.propTypes = {
  badgeDetails: PropTypes.object.isRequired
};

export default Badges;