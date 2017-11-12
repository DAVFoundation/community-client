import {put, call, takeLatest} from 'redux-saga/effects';
import {submitUpdateForm, submitUpdateFormSuccess, submitUpdateFormError} from '../actions';
import {apiCreateDavUpdate} from '../lib/api';


// WATCHER

export function* watchUpdateFormSubmit(){
  yield takeLatest(submitUpdateForm, workerUpdateFormSubmit);
}

// WORKER

export function* workerUpdateFormSubmit(action){
  try {
    const formData = action.payload.values;
    const resp = yield call(apiCreateDavUpdate, formData);
    yield put(submitUpdateFormSuccess(resp));
    yield call(action.payload.resolve);
  } catch(error) {
    yield put(submitUpdateFormError(error));
    yield call(action.payload.reject);
  }
}
