import React, {Component} from 'react'
//import {getState} from 'redux'
import Badge from '../presentationals/Badge.jsx'
import PropTypes from 'prop-types'

class BadgeContainer extends Component {
  render(){
    const stateProps = this.props.store.getState()
    console.log(stateProps)
    return (
      <div>
        <h2>Badges</h2>
        <Badge stateProps = {stateProps} />
      </div>
    )
  }
}

BadgeContainer.propTypes = {
  store: PropTypes.object
}

export default BadgeContainer