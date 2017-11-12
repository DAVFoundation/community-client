import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/presentationals/Navbar.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import UpdateFormContainer from './components/containers/UpdateFormContainer.jsx';
import UpdatesContainer from './components/containers/UpdatesContainer.jsx';
import initApp from './lib/init';
import './static/css/overrides.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    initApp();
  }

  render(){
    if(!this.props.authenticated ){
      return null;
    }
    if(this.props.permissions){
      if(!this.props.permissions.canAccessAdmin){
        return null;
      }
    }

    return(
      <div>
        <div id="nav-wrapper">
          <div className='container'>
            <div className='row'>
              <Navbar />
            </div>
          </div>
        </div>
        <div id="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <UpdateFormContainer />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <UpdatesContainer />
              </div>
            </div>
          </div>
        </div>
        <div id="footer-wrapper">
          <div className="container">
            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool,
  permissions: PropTypes.object
};

export default App;
