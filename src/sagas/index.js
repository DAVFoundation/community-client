import "regenerator-runtime/runtime";
import {all} from 'redux-saga/effects';
import {watchAddBadge, watchGetUserBadges} from './badgeSagas';
import {watchGetUser} from './userSagas';
import {watchGetUserUpdates} from './updateSagas';

// register watcher sagas
export default function* rootSaga(){
  yield all([
    watchAddBadge(),
    watchGetUserBadges(),
    watchGetUser(),
    watchGetUserUpdates()
  ]);
}
