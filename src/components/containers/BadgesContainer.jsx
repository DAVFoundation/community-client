// connect store state and action creators to react component props

import {connect} from 'react-redux';
import {addBadge} from '../../actions';
import Badges from '../presentationals/Badges.jsx';

const mapDispatchToProps = (dispatch) => ({
  addBadge: () => dispatch(addBadge())
});

const mapStateToProps = (state) => ({
  badgeIds: state.badges.badgeIds,
  badgesById: state.badges.badgesById
});

export default connect(mapStateToProps, mapDispatchToProps)(Badges);
