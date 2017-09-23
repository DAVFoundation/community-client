import "regenerator-runtime/runtime";
import {delay} from 'redux-saga';
import {put,call, takeEvery, all} from 'redux-saga/effects';

export function* helloSaga(){
  console.log("hello sagas");
}

// Worker Saga

export function* incrementAsync(){
  console.log("worker saga");
  yield call(delay,1000);
  yield put({type:'ADD_BADGE'});
}

// Watcher Saga
export function* watchIncrement(){
  console.log("watcher saga");
  yield takeEvery('ADD_BADGE_ASYNC', incrementAsync);
}

export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrement()
  ]);
}