import {combineReducers} from 'redux';
import badges from './badges';
import newsfeed from './newsfeed';
import user from './user';

export default combineReducers({
  user,
  badges,
  newsfeed
});
