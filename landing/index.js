$(document).ready(function(){

  var url = new URL(window.location.href);

  var urlHash = url.hash;
  var searchParams = new URLSearchParams(url.search.slice(1));

  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var forgotForm = document.getElementById("forgotForm");
  var verifyForm = document.getElementById("verifyForm");

  var signupLink = document.getElementsByClassName("signup-link");
  var loginLink = document.getElementsByClassName("login-link");
  var forgotLink = document.getElementById("forgot-link");

  if(urlHash == "#login"){
    $('#signupModal').modal('show');
    showLoginForm();
  } else if(urlHash == "#register"){
    $('#signupModal').modal('show');
    showSignupForm();
  } else if(urlHash == "#verify"){
    $("#signupModal").modal('show');
    showVerifyForm();
  }

  function populateForm(){
    if(searchParams.has("email")){
      document.getElementById("loginEmail").value = searchParams.get("email");
      document.getElementById("signupEmail").value = searchParams.get("email");
    }

    if(searchParams.has("name")){
      document.getElementById("signupName").value = searchParams.get("name");
    }
  }

  var apiUrl = 'http://localhost:3000'//'https://communityapi.missions.io';
  var redirectUrl ='http://localhost:8080' //'https://my.dav.network/';

  var minZoom = 2;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    minZoom = 1;
  }

  var maxZoom = 18;
  var map = L.map('mapid', {
    minZoom: minZoom,
    maxZoom: maxZoom,
    maxBoundsViscosity:.8
  });

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
      return L.divIcon({html: '', className: 'mycluster', iconSize: L.point(point,point)});
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
    };

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
      });
  }

  // LOGIN/ SIGNUP
  for(var i=0;i<signupLink.length; i++){
    signupLink[i].addEventListener('click', function(e){
      e.preventDefault();
      showSignupForm();
    });
  }

  for(var i=0;i<loginLink.length; i++){
    loginLink[i].addEventListener('click', function(e){
      e.preventDefault();
      showLoginForm();
    });
  }

  forgotLink.addEventListener('click', function(e){
    e.preventDefault();
    showForgotForm();
  })



  function showSignupForm(){
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    forgotForm.style.display = "none";
    verifyForm.style.display = "none";
    populateForm();
  }

  function showLoginForm(){
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    forgotForm.style.display = "none";
    verifyForm.style.display = "none";
    populateForm();
  }

  function showForgotForm(){
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    forgotForm.style.display = "block";
    verifyForm.style.display = "none";
  }

  function showVerifyForm(){
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    forgotForm.style.display = "none";
    verifyForm.style.display = "block";

    if(!searchParams.has("token")){
      document.getElementById('verify-error').innerHTML = "This link is invalid. Please request a new password";
    } else {
      document.getElementById('verify-error').innerHTML = "";
    }
  }

  verifyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var token = null

    if(searchParams.has("token")){
      token = searchParams.get("token")
    } else {
      document.getElementById('verify-error').innerHTML = "This link is invalid. Please request a new password"
      return
    }

    var password = document.getElementById("verifyPassword").value.trim();
    var passwordCopy = document.getElementById("verifyPasswordCopy").value.trim();

    if((password != passwordCopy)){
      document.getElementById('verify-error').innerHTML = "Passwords don't match"
      return
    }

    if(!password || !passwordCopy){
      document.getElementById('verify-error').innerHTML = "Please enter your password twice"
      return
    }

    var fetchInit = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept':  'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      body: JSON.stringify({
        password: document.getElementById("verifyPassword").value
      })
    };

    fetch(apiUrl+'/api/reset/'+token, fetchInit)
      .then(resp=>{
        if(resp.ok){
          window.location.replace(redirectUrl);
          return
        }
        return resp.json();
      })
      .then(json => {

        document.getElementById('verify-error').innerHTML = json.message;

      })
      .catch(error => {
        document.getElementById('verify-error').innerHTML = json.message;
        console.log(error);
      });

  })

  forgotForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submitting form");

    var fetchInit = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept':  'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      body: JSON.stringify({
        email: document.getElementById("forgotEmail").value
      })
    };

    fetch(apiUrl+'/api/forgot', fetchInit)
      .then(resp => {

        return resp.json();

      })
      .then((json) => {
        document.getElementById('forgot-info').innerHTML = json.message;
      })
      .catch((error) => {
        document.getElementById('forgot-info').innerHTML = error;
      });

  }, false);

  loginForm.addEventListener("submit", function(e){
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
    };

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
      });
  }, false);

  signupForm.addEventListener("submit", function(e){
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
    };

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
      });
  }, false);


});
