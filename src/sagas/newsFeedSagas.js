import {put, call, takeLatest} from 'redux-saga/effects';
import {getUserNewsFeed, getUserNewsFeedSuccess, getUserNewsFeedError} from '../actions';

// WATCHER SAGAS
export function* watchGetUserNewsFeed(){
  yield takeLatest(getUserNewsFeed, workerGetUserNewsFeed);
}

// WORKER SAGAS

export function* workerGetUserNewsFeed(){

  try{
    const resp = yield call(newsFeedApi);
    yield put(getUserNewsFeedSuccess(resp));

  } catch(error){

    yield put(getUserNewsFeedError(error));
  }
}

function newsFeedApi(){
  console.log("news feed");
}
