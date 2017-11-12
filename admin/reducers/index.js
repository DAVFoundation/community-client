import {combineReducers} from 'redux';
import updates from './updates';
import user from './user';

export default combineReducers({
  user,
  updates
});
