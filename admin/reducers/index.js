import {combineReducers} from 'redux';
import updates from './updates';
import user from './user';
import forms from './forms';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  user,
  updates,
  forms,
  form: formReducer
});
