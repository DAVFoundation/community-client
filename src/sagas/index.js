import "regenerator-runtime/runtime";
import {delay} from 'redux-saga';
import {put,call, takeEvery, all} from 'redux-saga/effects';
import {watchAddBadge, watchGetUserBadges} from './badgeSagas';

// register watcher sagas
export default function* rootSaga(){
  yield all([
    watchAddBadge(),
    watchGetUserBadges()
  ]);
}
