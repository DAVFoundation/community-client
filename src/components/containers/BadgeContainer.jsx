// connect store state and action creators to react component props

import React, {Component} from 'react'
//import {getState} from 'redux'

import {connect} from 'react-redux'
import {addBadge} from '../../actions'

import Badges from '../presentationals/Badges.jsx'
import PropTypes from 'prop-types'

class BadgeContainer extends Component {
  render(){
    const stateProps = this.props.store.getState()
    return (
      <div>
        <h2>Badges</h2>
        <Badges stateProps = {stateProps} />
      </div>
    )
  }
}

BadgeContainer.propTypes = {
  store: PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({
  addBadge: () => dispatch(addBadge())
})

const mapStateToProps = (state) => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(Badge)

export default BadgeContainer