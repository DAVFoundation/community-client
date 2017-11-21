import {connect} from 'react-redux';
import App from './App.jsx';

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  permissions: state.user.permissions,
});

export default connect(mapStateToProps)(App);
