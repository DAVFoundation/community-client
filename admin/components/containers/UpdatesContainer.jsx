import {connect} from 'react-redux';
import Updates from '../presentationals/Updates.jsx';
import {getDavUpdates} from '../../actions';

const mapStateToProps = (state) => ({
  updates: state.updates.updates
});

const mapDispatchToProps = (dispatch) => ({
  getDavUpdates: () => dispatch(getDavUpdates())
});

export default connect(mapStateToProps, mapDispatchToProps)(Updates);
