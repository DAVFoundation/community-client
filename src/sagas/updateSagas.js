import {put, call, takeLatest} from 'redux-saga/effects';
import {getUserUpdates, getUserUpdatesSuccess, getUserUpdatesError} from '../actions';
import {apiGetUserUpdates} from '../lib/api';

// WATCHER SAGAS
export function* watchGetUserUpdates(){
  yield takeLatest(getUserUpdates, workerGetUserUpdates);
}

// WORKER SAGAS

export function* workerGetUserUpdates(){

  try{
    const resp = yield call(apiGetUserUpdates);
    yield put(getUserUpdatesSuccess(resp));

  } catch(error){

    yield put(getUserUpdatesError(error));
  }
}

