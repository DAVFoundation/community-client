import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DavCard extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>Dav Card</h3>
        <h5>0x4248217480237408124215125</h5>
        <h5>0 dav balance</h5>
        <h5>Abhishek Singh</h5>
      </div>
    );
  }
}

export default DavCard;
