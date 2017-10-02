import {connect} from 'react-redux';
import NotificationBar from '../presentationals/NotificationBar.jsx';

const mapStateToProps = (state) => ({
  title : state.notification.title,
  description: state.notification.description,
  action: state.notification.action
});

export default connect(mapStateToProps)(NotificationBar);
