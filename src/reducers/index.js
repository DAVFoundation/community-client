import {combineReducers} from 'redux';
import badges from './badges';
import newsfeed from './newsfeed';

export default combineReducers({
  badges,
  newsfeed
});
