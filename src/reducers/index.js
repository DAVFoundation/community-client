import {combineReducers} from 'redux';
import badges from './badges';
import updates from './updates';
import user from './user';

export default combineReducers({
  user,
  badges,
  updates
});
