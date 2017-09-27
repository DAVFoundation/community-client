import {delay} from 'redux-saga';
import {put,call,takeEvery, takeLatest} from 'redux-saga/effects';
import {addBadge, addBadgeAsync, getUserBadges, getUserBadgesSuccess, getUserBadgesError} from '../actions';
import {apiGetUserBadges} from '../lib/api';

// WATCHER SAGAS
export function* watchAddBadge() {
  console.log("watching for add badge");
  yield takeEvery(addBadgeAsync, workerAddBadge);
}

export function* watchGetUserBadges(){
  yield takeLatest(getUserBadges, workerGetUserBadges);
}



// WORKER SAGAS
export function* workerAddBadge(){
  console.log("worker for add badge");
  yield call(delay, 1000);
  yield put(addBadge(2));
}

export function* workerGetUserBadges(){
  try{
    const resp = yield call(apiGetUserBadges);

    yield put(getUserBadgesSuccess(resp));
  } catch(error){
    yield put(getUserBadgesError(error));
  }
}


