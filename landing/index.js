$(document).ready(function(){

  var apiUrl = 'http://localhost:3000';//'https://communityapi.missions.io';
  var redirectUrl = 'http://localhost:8080';//'https://my.dav.network/';

  var minZoom = 2;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    minZoom = 1
  }

  var maxZoom = 18;
  var map = L.map('mapid', {
    minZoom: minZoom,
    maxZoom: maxZoom,
    maxBoundsViscosity:.8
  })

  map.on('load', function(){
    getDummyData();
  });

  //ny lat - 40.785091, ny long - -73.968285
  map.fitWorld();

  map.setMaxBounds(map.getBounds());

  var davMarker  = L.icon({
    iconUrl: './images/pin24.png',
    iconRetinaUrl: './images/pin48.png',
    shadowUrl: './images/shadow24.png',
    shadowRetinaUrl: './images/shadow48.png',
    iconSize: [20,24],
    iconAnchor: [10,24],
    shadowSize: [20,24],
    shadowAnchor:[0,24],
    popupAnchor: [0, -20],
  });

  var markers = L.markerClusterGroup({
    maxClusterRadius: 30,
    iconCreateFunction: function(cluster) {
      // var markers = cluster.getAllChildMarkers();
      var n = cluster.getChildCount();
      let point = 0;

      switch(true){
        case n<75:
          point = 15;
          break;
        case n<150:
          point = 20;
          break;
        case n<225:
          point = 25;
          break;
        case n<300:
          point = 30;
          break;
        case n<375:
          point = 35;
          break;
        case n<450:
          point = 40;
          break;
        case n<525:
          point = 45;
          break;
        default:
          point = 50;
          break;
      }
      return L.divIcon({html: '', className: 'mycluster', iconSize: L.point(point,point)})
    },
    showCoverageOnHover: false
  });

  function populateMap(points) {
    for (var i = 0; i < points.length; i++) {
      let lat = points[i].coordinates[1].toFixed(1);
      let lng = points[i].coordinates[0].toFixed(1);
      var popup = lat + ", " + lng;
      var m = L.marker([points[i].coordinates[1], points[i].coordinates[0]], { title: i, icon: davMarker}).bindPopup(popup);
      m.number = i;
      markers.addLayer(m);
    }

    map.addLayer(markers);
  }

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1Ijoic2hla2l0IiwiYSI6ImNqOHQ3NjBoODBpeDkzNG82ODR6cHpkZTYifQ.UfBMaIDH3yR1leLSnOaK5A'
  }).addTo(map);

  function getDummyData(){

    var fetchInit = {
      method: 'GET'
    }

    fetch(apiUrl+'/api/dummy-data', fetchInit)
      .then(resp=>{
        if(resp.ok){
          return resp.json();
        }
      })
      .then(json => {

        document.getElementById('station-number').innerHTML = json.points.length;
        populateMap(json.points);


        // populate map markers
      })
      .catch(error => {
        document.getElementById('station-number').innerHTML = "Error Accessing";
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

    fetch(apiUrl+'/api/login', fetchInit)
      .then(resp=>{
        if(resp.ok){
          window.location.replace(redirectUrl);
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

    fetch(apiUrl+'/api/signup', fetchInit)
      .then(resp=>{
        if(resp.ok){
          window.location.replace(redirectUrl);
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
