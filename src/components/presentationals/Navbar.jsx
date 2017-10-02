import React, {Component} from 'react';

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
        <nav className="navbar">
          <a className="navbar-brand">Community</a>
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
