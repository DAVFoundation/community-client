import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Badge extends Component {

  render(){
    var self = this;
    var badgeList = this.props.stateProps.badges.map(function(badgeId, index){
      return <BadgeIcon key={index} badgeDetails={self.props.stateProps.badgesById[badgeId]} />
    })
    return(
      <div>
        <ul>{badgeList}</ul>
      </div>
    )
  }
}

class BadgeIcon extends Component {

  render(){
    return (
      <li>{this.props.badgeDetails.title}</li>
    )
  }
}

Badge.propTypes = {
  stateProps: PropTypes.object.isRequired
}

BadgeIcon.propTypes = {
  badgeDetails: PropTypes.object.isRequired
}

export default Badge