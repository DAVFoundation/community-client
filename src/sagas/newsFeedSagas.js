import {put, call, takeLatest} from 'redux-saga/effects';
import {getUserNewsFeed, getUserNewsFeedSuccess, getUserNewsFeedError} from '../actions';
import {apiGetUserNewsFeed} from '../lib/api';

// WATCHER SAGAS
export function* watchGetUserNewsFeed(){
  yield takeLatest(getUserNewsFeed, workerGetUserNewsFeed);
}

// WORKER SAGAS

export function* workerGetUserNewsFeed(){

  try{
    const resp = yield call(apiGetUserNewsFeed);
    yield put(getUserNewsFeedSuccess(resp));

  } catch(error){

    yield put(getUserNewsFeedError(error));
  }
}

