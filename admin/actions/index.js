import {createAction} from 'redux-actions';

export const getUser = createAction('GET_USER');

export const getUserSuccess = createAction('GET_USER_SUCCESS');

export const getUserError = createAction('GET_USER_ERROR');

export const logoutUser = createAction('LOGOUT_USER');

export const getDavUpdates = createAction('GET_DAV_UPDATES');

export const getDavUpdatesSuccess = createAction('GET_DAV_UPDATES_SUCCESS');

export const getDavUpdatesError = createAction('GET_DAV_UPDATES_ERROR');

export const submitUpdateForm = createAction('SUBMIT_UPDATE_FORM');

export const submitUpdateFormSuccess = createAction('SUBMIT_UPDATE_FORM_SUCCESS');

export const submitUpdateFormError = createAction('SUBMIT_UPDATE_FORM_ERROR');

export const deleteDavUpdate = createAction('DELETE_DAV_UPDATE');

export const deleteDavUpdateSuccess = createAction('DELETE_DAV_UPDATE_SUCCESS');

export const deleteDavUpdateError = createAction('DELETE_DAV_UPDATE_ERROR');
