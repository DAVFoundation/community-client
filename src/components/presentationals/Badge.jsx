import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Badge extends Component {

  render(){
    var badgeList = this.props.stateProps.badges.map((badgeId, index) =>
      (<li key={index}>{this.props.stateProps.badgesById[badgeId].title}</li>)
    );
    return(
      <div>
        <ul>{badgeList}</ul>
      </div>
    )
  }
}

Badge.propTypes = {
  stateProps: PropTypes.object,
  badges: PropTypes.array
}

export default Badge
