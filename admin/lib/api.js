import config from '../config';
import store from '../store';
import {getDavUpdates} from '../actions';

export function apiGetUser(){
  return fetch(`${config.api.endpoint}/api/user`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(resp => {
      if(!resp.ok) window.location.replace(config.login.endpoint);
      return resp;
    })
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}

export function apiLogoutUser(){
  return fetch(`${config.api.endpoint}/api/logout`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => {
      window.location.replace(config.login.endpoint);
    })
    .catch(error => {throw error;});
}

export function apiCreateDavUpdate(formData){
  return fetch(`${config.api.endpoint}/api/admin/update/add`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Cache': 'no-cache',
    },
    body: JSON.stringify(formData)
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => {
      store.dispatch(getDavUpdates());
    })
    .catch(error => {throw error;});
}

export function apiGetDavUpdates(){
  return fetch(`${config.api.endpoint}/api/admin/update/list`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error=>{throw error;});
}

function handleApiErrors(resp){
  if(!resp.ok) throw Error(resp.statusText);
  return resp;
}
