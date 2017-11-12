import {put, call, takeLatest} from 'redux-saga/effects';
import {getDavUpdates, getDavUpdatesSuccess, getDavUpdatesError, deleteDavUpdate, deleteDavUpdateSuccess, deleteDavUpdateError} from '../actions';
import {apiGetDavUpdates, apiDeleteDavUpdate} from '../lib/api';

// WATCHER

export function* watchGetDavUpdates(){
  yield takeLatest(getDavUpdates, workerGetDavUpdates);
}

export function* watchDeleteDavUpdate(){
  yield takeLatest(deleteDavUpdate, workerDeleteDavUpdate);
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

export function* workerDeleteDavUpdate(action){
  try {
    const updateId = action.payload;
    const resp = yield call(apiDeleteDavUpdate, updateId);
    yield put(deleteDavUpdateSuccess(resp));
  } catch(error){
    yield put(deleteDavUpdateError(error));
  }
}
