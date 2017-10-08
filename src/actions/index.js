import {createAction} from 'redux-actions';

export const getUser = createAction('GET_USER');

export const getUserSuccess = createAction('GET_USER_SUCCESS');

export const getUserError = createAction('GET_USER_ERROR');

export const logoutUser = createAction('LOGOUT_USER');

export const addBadge = createAction('ADD_BADGE');

export const addBadgeAsync = createAction('ADD_BADGE_ASYNC');

export const getUserBadges = createAction('GET_USER_BADGES');

export const getUserBadgesSuccess = createAction('GET_USER_BADGES_SUCCESS');

export const getUserBadgesError = createAction('GET_USER_BADGES_ERROR');

export const addUserBadge = createAction('ADD_USER_BADGE');

export const removeUserBadge = createAction('REMOVE_USER_BADGE');

export const getUserUpdates = createAction('GET_USER_UPDATES');

export const getUserUpdatesSuccess = createAction('GET_USER_UPDATES_SUCCESS');

export const getUserUpdatesError = createAction('GET_USER_UPDATES_ERROR');

export const openModal = createAction('OPEN_MODAL');

export const closeModal = createAction('CLOSE_MODAL');

export const selectTab = createAction('SELECT_TAB');
