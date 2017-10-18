import React, {Component} from 'react';
import '../../static/css/Header.css';

class Header extends Component{
  render(){
    return(
      <div id="header-bar" className="col-12">
        <h1>Welcome to the DAV Community</h1>
        <p><span>Explore the bounties and opportunities below to find new ways to earn with DAV,</span><span>contribute to the community, and explore the future of Decentralized Autonomous</span><span>Vehicles.</span></p>
      </div>
    );
  }
}

export default Header;
