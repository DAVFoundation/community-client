import React, {Component} from 'react';
import {Footer} from './components/presentationals/Footer.jsx';
import BadgeContainer from './components/containers/BadgeContainer.jsx';
import PropTypes from 'prop-types';
import store from './store';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Community Client</h1>
        <BadgeContainer store={store} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;