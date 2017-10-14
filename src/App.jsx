import React, {Component} from 'react';
import Navbar from './components/presentationals/Navbar.jsx';
import Header from './components/presentationals/Header.jsx';
import NotificationBarContainer from './components/containers/NotificationBarContainer.jsx';
import DavCardContainer from './components/containers/DavCardContainer.jsx';
import ProfileTasksContainer from './components/containers/ProfileTasksContainer.jsx';
import {Footer} from './components/presentationals/Footer.jsx';
import BountiesContainer from './components/containers/BountiesContainer.jsx';
import BadgesContainer from './components/containers/BadgesContainer.jsx';
import UpdatesContainer from './components/containers/UpdatesContainer.jsx';
import ModalContainer from './components/containers/ModalContainer.jsx';
import initApp from './lib/init';
import './static/css/overrides.css';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    initApp();
  }

  render(){
    if(!this.props.authenticated){
      return null;
    }
    return (
      <div>

        <ModalContainer />
        <div className='container-fluid'>
          <Navbar />
          <div className="row">
            <NotificationBarContainer />
          </div>
          <div className="row">
            <Header />
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

App.propTypes = {
  authenticated: PropTypes.bool
};

export default App;
