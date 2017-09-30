import {put,call,takeLatest} from 'redux-saga/effects';
import {getUser, getUserSuccess, getUserError} from '../actions';
import {apiGetUser} from '../lib/api';

//WATCHER SAGA
export function* watchGetUser(){
  yield takeLatest(getUser, workerGetUser);
}

//WORKER SAGA

export function* workerGetUser(){
  try{
    const resp = yield call(apiGetUser);
    yield put(getUserSuccess(resp));
  }catch(error){
    yield put(getUserError(error));
  }
}
