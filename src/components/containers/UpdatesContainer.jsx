import {connect} from 'react-redux';
import Updates from '../presentationals/Updates.jsx';
import {getUserUpdates} from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  getUserUpdates: () => dispatch(getUserUpdates())
});

const mapStateToProps = (state) => ({
  updateIds: state.updates.updateIds,
  updatesById: state.updates.updatesById
});

export default connect(mapStateToProps, mapDispatchToProps)(Updates);
