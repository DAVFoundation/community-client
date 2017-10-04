import React, {Component} from 'react';
import '../../static/css/Navbar.css';
import store from '../../store';
import {logoutUser} from '../../actions';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e){
    e.preventDefault();
    console.log("logout");
    store.dispatch(logoutUser());
  }

  render(){
    return(
      <div>
        <nav className="navbar navbar-custom">
          <a className="navbar-brand">
            <img src="../../static/images/logo.png" className="logo"/>
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href='#' onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
