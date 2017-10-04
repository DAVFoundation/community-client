import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DavCard extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser();
  }

  render(){
    return(
      <div>
        <h3>Dav Card</h3>
        <h5>{this.props.uid}</h5>
        <h5>{this.props.balance} dav balance</h5>
        <h5>{this.props.name}</h5>
      </div>
    );
  }
}

DavCard.propTypes = {
  uid: PropTypes.string,
  balance: PropTypes.number,
  name: PropTypes.string,
  getUser: PropTypes.func
};

export default DavCard;
