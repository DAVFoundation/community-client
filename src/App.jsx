import React, {Component} from 'react';
import Navbar from './components/presentationals/Navbar.jsx';
import NotificationBarContainer from './components/containers/NotificationBarContainer.jsx';
import DavCardContainer from './components/containers/DavCardContainer.jsx';
import ProfileTasksContainer from './components/containers/ProfileTasksContainer.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import Bounties from './components/presentationals/Bounties.jsx';
import BadgesContainer from './components/containers/BadgesContainer.jsx';
import UpdatesContainer from './components/containers/UpdatesContainer.jsx';
import initApp from './lib/init.js';

class App extends Component {
  componentDidMount() {
    initApp();
  }

  render(){
    return (
      <div>
        <Navbar />
        <NotificationBarContainer />
        <DavCardContainer />
        <ProfileTasksContainer />
        <Bounties />
        <BadgesContainer />
        <UpdatesContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
