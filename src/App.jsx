import React, {Component} from 'react';
import {Footer} from './components/presentationals/Footer.jsx';
import BadgesContainer from './components/containers/BadgesContainer.jsx';
import PropTypes from 'prop-types';
import store from './store';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Community Client</h1>
        <BadgesContainer />
        <Footer />
      </div>
    );
  }
}

export default App;