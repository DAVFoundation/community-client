import {connect} from 'react-redux';
import App from './App.jsx';

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(App);
