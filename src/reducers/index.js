import {combineReducers} from 'redux';
import badges from './badges';
import updates from './updates';
import user from './user';
import tasks from './tasks';
import card from './card';
import notification from './notification';
import bounties from './bounties';
import modals from './modals';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  user,
  badges,
  updates,
  tasks,
  card,
  notification,
  bounties,
  modals,
  form: formReducer
});
