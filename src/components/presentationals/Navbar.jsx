import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e){
    e.preventDefault();
    console.log("logout");
  }

  render(){
    return(
      <div>
        <h1>Community Logo</h1>
        <a href='#' onClick={this.logout}>Logout</a>
      </div>
    );
  }
}

export default Navbar;
