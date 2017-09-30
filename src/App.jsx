import React, {Component} from 'react';
import {Footer} from './components/presentationals/Footer.jsx';
import BadgesContainer from './components/containers/BadgesContainer.jsx';
import NewsFeedContainer from './components/containers/NewsFeedContainer.jsx';
import initializeApp from './lib/init';

class App extends Component {
  componentDidMount() {
    initializeApp();
  }

  render(){
    return (
      <div>
        <h1>Community Client</h1>
        <BadgesContainer />
        <NewsFeedContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
