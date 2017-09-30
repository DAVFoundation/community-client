import config from 'config';

export function apiGetUserBadges(){
  return fetch(`${config.api.endpoint}/api/badges`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}

export function apiGetUser(){
  return fetch(`${config.api.endpoint}/api/user`,{
    method: 'GET',
    credentials: 'include'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}

function handleApiErrors(resp){
  if(!resp.ok) throw Error(resp.statusText);
  return resp;
}

export function apiGetUserNewsFeed(){
  return fetch("http://localhost:3000/api/news", {
    method: 'GET'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {throw error;});
}
