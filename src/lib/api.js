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

export function apiGetUserDetails(){
  return fetch(`${config.api.endpoint}/api/user`);
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
