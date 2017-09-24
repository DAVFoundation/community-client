// connect store state and action creators to react component props

import {connect} from 'react-redux';
import {addBadge, addBadgeAsync} from '../../actions';
import Badges from '../presentationals/Badges.jsx';

const mapDispatchToProps = (dispatch) => ({
  addBadge: (val) => dispatch(addBadge(val)),
  addBadgeAsync: () => dispatch(addBadgeAsync())
});

const mapStateToProps = (state) => ({
  badgeIds: state.badges.badgeIds,
  badgesById: state.badges.badgesById
});

export default connect(mapStateToProps, mapDispatchToProps)(Badges);
