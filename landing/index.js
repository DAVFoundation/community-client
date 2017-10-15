$(document).ready(function(){

  var minZoom = 2;
  var maxZoom = 18;
  var map = L.map('mapid', {
    minZoom: minZoom,
    maxZoom: maxZoom,
    maxBoundsViscosity:1.0
  }).setView([20, 20], minZoom);

  map.setMaxBounds(map.getBounds());

  var markers = L.markerClusterGroup({
    maxClusterRadius: 120
  });

  function populate() {
    for (var i = 0; i < 100; i++) {
      var m = L.marker(getRandomLatLng(map), { title: i });
      m.number = i;
      markers.addLayer(m);
    }
    return false;
  }
  function populateRandomVector() {
    for (var i = 0, latlngs = [], len = 20; i < len; i++) {
      latlngs.push(getRandomLatLng(map));
    }
    var path = L.polyline(latlngs);
    map.addLayer(path);
  }
  function getRandomLatLng(map) {
    var bounds = map.getBounds(),
      southWest = bounds.getSouthWest(),
      northEast = bounds.getNorthEast(),
      lngSpan = northEast.lng - southWest.lng,
      latSpan = northEast.lat - southWest.lat;

    return L.latLng(
        southWest.lat + latSpan * Math.random(),
        southWest.lng + lngSpan * Math.random());
  }

  populate();
  map.addLayer(markers);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2hla2l0IiwiYSI6ImNqOHQ3NjBoODBpeDkzNG82ODR6cHpkZTYifQ.UfBMaIDH3yR1leLSnOaK5A'
  }).addTo(map);

  function populateData(){

    var fetchInit = {
      method: 'GET'
    }

    fetch('http://localhost:3000/api/dummy-data', fetchInit)
      .then(resp=>{
        if(resp.ok){
          return resp.json();
        }
      })
      .then(json => {
        console.log(json.points.length);
        // populate map markers
      })
      .catch(error => {
        console.log(error);
      })
  }

  // LOGIN/ SIGNUP

  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var signupLink = document.getElementById("signup-link");
  var loginLink = document.getElementById("login-link");

  signupLink.addEventListener('click', function(e){
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  })

  loginLink.addEventListener('click', function(e){
    e.preventDefault();
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  })

  document.querySelector("#loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    var fetchInit = {
      method: 'POST',
      credentials :'include',
      headers: {
        'Accept':  'application/json',
         'Content-Type': 'application/json',
         'Cache': 'no-cache'
      },
      body: JSON.stringify({
        email: document.getElementById('loginEmail').value,
        password: document.getElementById('loginPass').value
      })
    }

    fetch('http://localhost:3000/api/login', fetchInit)
      .then(resp=>{
        if(resp.ok){
          window.location.replace('http://localhost:8080');
        } else{
          return resp.json();
        }
      })
      .then(json=>{
        console.log(json);
        document.getElementById('login-errors').innerHTML = json.message;
      })
      .catch(error=>{
        console.log(error);
      })
    }, false)

  document.querySelector("#signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    var fetchInit = {
      method: 'POST',
      credentials :'include',
      headers: {
        'Accept':  'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      body: JSON.stringify({
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPass').value,
        subscribe: document.getElementById('subscribeCheckbox').checked
      })
    }

    fetch('http://localhost:3000/api/signup', fetchInit)
      .then(resp=>{
        if(resp.ok){
          window.location.replace('http://localhost:8080');
        } else {
          return resp.json();
        }

      })
      .then(json=>{
        console.log(json);
        document.getElementById('signup-errors').innerHTML = json.message;
      })
      .catch(error=>{
        console.log(error);
      })
  }, false)


})
