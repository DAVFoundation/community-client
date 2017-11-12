import "regenerator-runtime/runtime";
import {all} from 'redux-saga/effects';
import {watchGetUser, watchLogoutUser} from './userSagas';
import {watchGetDavUpdates} from './updateSagas';
import {watchUpdateFormSubmit} from './formSagas';


export default function* rootSaga(){
  yield all([
    watchGetUser(),
    watchLogoutUser(),
    watchGetDavUpdates(),
    watchUpdateFormSubmit()
  ]);
}
