import {delay} from 'redux-saga';
import {put,call,takeEvery, takeLatest} from 'redux-saga/effects';
import {addBadge, addBadgeAsync, getUserBadges, getUserBadgesSuccess, getUserBadgesError} from '../actions';

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
    const resp = yield call(badgeApi);
    console.log(resp);

    yield put(getUserBadgesSuccess(resp));
  } catch(error){
    yield put(getUserBadgesError(error));
  }
}

function badgeApi(){
  return fetch("http://localhost:3000/api/badges", {
    method: 'GET'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch((error) => {throw error;});

  /*return {
    badgeIds : [3,5],
    badgesById : {
      3 : {
        id: 3,
        img: "founder",
        title: "API Founder"
      },
      5 : {
        id: 5,
        img : "contributor",
        title: "API Contributor"
      }
    }
  };*/
}

function handleApiErrors(resp){
  if(!resp.ok) throw Error(resp.statusText);
  return resp;
}

