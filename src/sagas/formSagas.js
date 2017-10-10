import {put, call, takeLatest} from 'redux-saga/effects';
import {submitStationForm, submitStationFormSuccess, submitStationFormError} from '../actions';
import {apiCreateStation} from '../lib/api';


export function* watchStationFormSubmit(){
  yield takeLatest(submitStationForm, workerStationFormSubmit);
}

export function* workerStationFormSubmit(action){
  console.log("called submit station");
  console.log(action);
  // try {
  //   const formData = action.payload.values;
  //   const resp = yield call(apiCreateStation, formData);
  //   yield put(submitStationFormSuccess());
  //   yield call(action.payload.resolve);
  // } catch(error){
  //   yield put(submitStationFormError(error));
  //   yield call(action.payload.reject, {address:"not valid address"});
  // }
}
