export function apiGetUserBadges(){
  return fetch("http://localhost:3000/api/badges", {
    method: 'GET'
  })
    .then(handleApiErrors)
    .then(resp => resp.json())
    .then(json => json)
    .catch((error) => {throw error;});
}

function handleApiErrors(resp){
  if(!resp.ok) throw Error(resp.statusText);
  return resp;
}
