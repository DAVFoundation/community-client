import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/DavCard.css';

class DavCard extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser();
  }

  render(){
    return(
      <div className="col-7 col-md-12" id="dav-card">
        <img id="card-logo" className="card-content" src="../../static/images/curr-logo.png" />
        <div id="card-uid" className="card-content">
          {this.props.uid}
        </div>
        <div id="card-balance" className="card-content">
          <h4 className="bal">Balance</h4>
          <h5>{this.props.balance}</h5>
          <img src='../../static/images/curr-logo.png'/>
        </div>
        <div id="card-owner" className="card-content">
          <img id="card-avatar" src={this.props.avatar} />
          <h5 id="card-name">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

DavCard.propTypes = {
  uid: PropTypes.string,
  balance: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  getUser: PropTypes.func
};

export default DavCard;
