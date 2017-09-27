import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsFeed extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){

    var newslist = this.props.newsIds.map(
      (newsId, index) => (<NewsItem key={index} details={this.props.newsById[newsId]} />)
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
  newsIds: PropTypes.array,
  newsById: PropTypes.object
}

NewsItem.propTypes = {
  details: PropTypes.object.isRequired
};

export default NewsFeed;
