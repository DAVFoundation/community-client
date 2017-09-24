import {delay} from 'redux-saga';
import {put,call,takeEvery} from 'redux-saga/effects';
import {addBadge, addBadgeAsync} from '../actions';

// WATCHER SAGAS
export function* watchAddBadge() {
  console.log("watching for add badge");
  yield takeEvery(addBadgeAsync, workerAddBadge);
} 

// WORKER SAGAS
export function* workerAddBadge(){
  console.log("worker for add badge");
  yield call(delay, 1000);
  yield put(addBadge(2));
}