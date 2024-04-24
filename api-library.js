let removeNav = document.getElementById("remove_nav");//removes nav
removeNav.remove();

let removeElements1 = document.getElementById("remove_row1");//removes other div
removeElements1.remove();

let removeElements2 = document.getElementById("remove_row2");//removes other div
removeElements2.remove();

let createdDiv = document.createElement('div');//creates div and binds created div as child
document.getElementById('append_div').appendChild(createdDiv);

let divH2 = document.createElement('h2');//styles around Agolia search
    divH2.textContent="Search using Agolia Places JS Library";
    divH2.style.color="Black";
    divH2.style.borderBottom="5px dashed purple";
    divH2.style.fontFamily="cursive";
    divH2.style.textAlign="center";
    createdDiv.appendChild(divH2);




var mapstyle = document.getElementById('mapid');//styles map
mapstyle.style.border="5px solid black";
mapstyle.style.width="100%";
mapstyle.style.height="700px";

var sligo = L.marker([54.2766, -8.4761]).bindPopup('Sligo, IE.'),//coordinates for many cities and pins around Ireland
    dublin = L.marker([53.33306, -6.24889]).bindPopup('Dublin, IE.'),
    cork = L.marker([51.89797, -8.47061]).bindPopup('Cork, IE.'),
    galway = L.marker([53.27194, -9.04889]).bindPopup('Galway, IE.');
    belfast = L.marker([54.59644, -5.93028]).bindPopup('Belfast, IE.');
    athlone = L.marker([53.43333, -7.95]).bindPopup('Athlone, IE.');

    var cities = L.layerGroup([sligo, dublin, cork, galway, belfast, athlone]);//var cities array

    var overlayMaps = {//adds it as a selectable overlay in the map
        "Cities": cities
    };
    
var mymap = L.map('mapid', {
    center: [54.2766, -8.4761],// loads map focused on sligo 
    zoom: 6,
});

var overlayMaps = {
    "Cities": cities//binds cities var
};

L.control.layers(overlayMaps).addTo(mymap);

var popup = L.popup()
    .setLatLng([54.278, -8.46])//makes a popup pin on IT Sligo
    .setContent("IT Sligo Campus")
    .openOn(mymap);

var circle = L.circle([54.2766, -8.4761], {//Blue low opatacity circle around Co. SLigo
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.1,
    radius: 19000//19km zone around CO. SLigo
    
}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',//uses Mapbox
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFuaWVsaDU1IiwiYSI6ImNraW5tZmZkbjEyb2YyeWxiMjhyeDZqcXoifQ.veHicsly3Tv_uJOQicBmew'//API Key
}).addTo(mymap);



var placesAutocomplete = places({
    appId: 'plJPG6G9YXBM',//API id
    apiKey: '9a32fb4cc37690867466e29819047b91',//API key
    container: document.querySelector('#address_input')//selects the ID in the HTML doc
  });

const fixedOptions = {
    appId: 'plJPG6G9YXBM',//API id
    apiKey: '9a32fb4cc37690867466e29819047b91',//API key
    container: document.querySelector('#address_input'),//selects the ID in the HTML doc
  };
  
  const reconfigurableOptions = {
    language: 'ru', // Receives results in russian
    countries: ['ie', 'uk'], // Search in the UK and Ireland
    type: 'city', // Search only for cities names
    aroundLatLngViaIP: true //enables search around IP
  };
  const placesInstance = places(fixedOptions).configure(reconfigurableOptions);
  
  // dynamically reconfigure options
  placesInstance.configure({
    countries: ['ie'] // Locks search to Ireland
  })

  let agoliaPlacesStyle = document.getElementById("address_input");
  agoliaPlacesStyle.style.fontFamily="Brush Script MT";
  agoliaPlacesStyle.style.color="purple";
  agoliaPlacesStyle.style.backgroundColor="white";
  agoliaPlacesStyle.style.fontWeight="bold";





  