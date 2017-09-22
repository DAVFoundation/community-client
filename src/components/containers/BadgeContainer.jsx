import { connect } from 'react-redux';
import Badge from '../presentationals/Badge.jsx'

export default connect(
  (state) => ({
    badges: state.badges,
    badgesById: state.badgesById,
  })
)(Badge);
