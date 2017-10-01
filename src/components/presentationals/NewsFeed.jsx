import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsFeed extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUserNewsFeed();
  }

  render(){

    var newslist = this.props.updateIds.map(
      (updateId, index) => (<NewsItem key={index} details={this.props.updatesById[updateId]} />)
    );

    return(
      <div>
        <ul>{newslist}</ul>
      </div>
    );
  }
}

class NewsItem extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>{this.props.details.description}</li>
    );
  }
}

NewsFeed.propTypes = {
  updateIds: PropTypes.array,
  updatesById: PropTypes.object,
  getUserNewsFeed: PropTypes.func
};

NewsItem.propTypes = {
  details: PropTypes.object.isRequired
};

export default NewsFeed;
