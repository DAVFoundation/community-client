import {connect} from 'react-redux';
import Updates from '../presentationals/Updates.jsx';
import {getDavUpdates, deleteDavUpdate} from '../../actions';

const mapStateToProps = (state) => ({
  updates: state.updates.updates
});

const mapDispatchToProps = (dispatch) => ({
  getDavUpdates: () => dispatch(getDavUpdates()),
  deleteDavUpdate: (id) => dispatch(deleteDavUpdate(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Updates);
