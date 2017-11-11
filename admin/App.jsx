import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/presentationals/Navbar.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import './static/css/overrides.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  render(){
    if(!this.props.authenticated){
      return null;
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
  authenticated: PropTypes.bool
};

export default App;
