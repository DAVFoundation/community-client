import React, {Component} from 'react';
import Navbar from './components/presentationals/Navbar.jsx';
import NotificationBarContainer from './components/containers/NotificationBarContainer.jsx';
import DavCardContainer from './components/containers/DavCardContainer.jsx';
import ProfileTasksContainer from './components/containers/ProfileTasksContainer.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import BountiesContainer from './components/containers/BountiesContainer.jsx';
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
        <div className='container-fluid'>
          <Navbar />
          <div className="row">
            <div className="col-xs-12">
              <NotificationBarContainer />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-xs-12">
                  <DavCardContainer />
                </div>
                <div className="col-xs-12">
                  <BadgesContainer />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <ProfileTasksContainer />
                </div>
                <div className="col-md-12">
                  <BountiesContainer />
                </div>
                <div className="col-md-12">
                  <UpdatesContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
