import {connect} from 'react-redux';
import NotificationBar from '../presentationals/NotificationBar.jsx';
import {hideNotification} from '../../actions';

const mapStateToProps = (state) => ({
  title : state.notification.title,
  description: state.notification.description,
  action: state.notification.action,
  visible: state.notification.visible
});

const mapDispatchToProps = (dispatch) => ({
  hideNotification: () => dispatch(hideNotification())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBar);
