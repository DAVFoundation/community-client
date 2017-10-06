import React, {Component} from 'react';
import Navbar from './components/presentationals/Navbar.jsx';
import NotificationBarContainer from './components/containers/NotificationBarContainer.jsx';
import DavCardContainer from './components/containers/DavCardContainer.jsx';
import ProfileTasksContainer from './components/containers/ProfileTasksContainer.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import BountiesContainer from './components/containers/BountiesContainer.jsx';
import BadgesContainer from './components/containers/BadgesContainer.jsx';
import UpdatesContainer from './components/containers/UpdatesContainer.jsx';
import FormContainer from './components/containers/FormContainer.jsx';
import './static/css/overrides.css';

class App extends Component {

  render(){
    return (
      <div>
        <div className='container-fluid'>
          <Navbar />
          <div className="row">
            <NotificationBarContainer />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">

                <DavCardContainer />

                <div className="col-sm-12">
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
          <div className="row">
            <FormContainer />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
