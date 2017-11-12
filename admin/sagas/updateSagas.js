import {put, call, takeLatest} from 'redux-saga/effects';
import {getDavUpdates, getDavUpdatesSuccess, getDavUpdatesError} from '../actions';
import {apiGetDavUpdates} from '../lib/api';

// WATCHER

export function* watchGetDavUpdates(){
  yield takeLatest(getDavUpdates, workerGetDavUpdates);
}

// WORKER

export function* workerGetDavUpdates(){

  try {
    const resp = yield call(apiGetDavUpdates);
    yield put(getDavUpdatesSuccess(resp));
  } catch(error){
    yield put(getDavUpdatesError(error));
  }
}
