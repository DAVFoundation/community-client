import {connect} from 'react-redux';
import NewsFeed from '../presentationals/NewsFeed.jsx';
import {getUserNewsFeed} from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  getUserNewsFeed: () => dispatch(getUserNewsFeed())
});

const mapStateToProps = (state) => ({
  newsIds: state.newsfeed.newsIds,
  newsById: state.newsfeed.newsById
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
