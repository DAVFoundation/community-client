import {connect} from 'react-redux';
import App from './App.jsx';

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  canAccessAdmin: state.user.permissions.canAccessAdmin
});

export default connect(mapStateToProps)(App);
