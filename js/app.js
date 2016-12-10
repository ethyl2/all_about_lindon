var locations = [
  {title: 'Lindon Pioneer Park', location: {lat: 40.335168, lng: -111.702404},
    url: 'http://www.lindoncity.org/parks.htm', type: 'park'},
  {title: 'Lindon Aquatics Center', location: {lat: 40.340225, lng: -111.716937},
    url: 'http://www.lindonpool.org/', type: 'pool'},
  {title: 'Lindon Community Center', location: {lat: 40.339282, lng: -111.715786},
    url: 'http://www.lindoncity.org/lindon-community-center.htm', type: 'building'},
  {title: 'Lindon City Center Park', location: {lat: 40.341354, lng: -111.717734},
    url: 'http://www.lindoncity.org/parks.htm', type: 'park'},
  {title: 'Hollow Park', location: {lat: 40.34435, lng: -111.707789},
    url: 'http://www.lindoncity.org/parks.htm', type: 'park'},
  {title: 'Pheasant Brook Park', location: {lat: 40.342762, lng: -111.735755},
    url: 'http://www.lindoncity.org/parks.htm', type: 'park'},
  {title: 'Creekside Park', location: {lat: 40.336821, lng: -111.729606},
    url: 'http://www.lindoncity.org/parks.htm', type: 'park'},
  {title: 'Fryer Park', location: {lat: 40.349122, lng: -111.715525},
    url: 'https://jacobbarlow.com/2015/01/02/fryer-park/', type: 'park'},
  {title: 'Panorama Park', location: {lat: 40.340744, lng: -111.694108},
    url: 'https://siterepository.s3.amazonaws.com/00442201111180730597020.pdf',
    type: 'park'},
  {title: 'Equestrian Staging Area', location: {lat: 40.341882, lng: -111.686308},
    url: 'https://siterepository.s3.amazonaws.com/00442201006240905343219.pdf',
    type: 'trailhead'},
  {title: 'This One\'s for the Birds', location: {lat: 40.342633, lng: -111.688933},
    url: 'https://www.geocaching.com/geocache/GC2YXN4_this-ones-for-the-birds',
    type: 'geocache'},
  {title: 'Hobbes Hide Number 3', location: {lat: 40.341167, lng: -111.688817},
    url: 'https://www.geocaching.com/geocache/GC189DC_hobbes-hide-3',
    type: 'geocache'},
  {title: 'Pay it Forward CITO: Dry Canyon', location: {lat: 40.342117, lng: -111.67745},
    url: 'https://www.geocaching.com/geocache/GC27NCE_pay-it-forward-cito-dry-canyon',
    type: 'geocache'},
  {title: 'Lindon Murdoch Canal Trailhead', location: {lat: 40.343716, lng: -111.696934},
    url: 'http://www.traillink.com/trail/murdock-canal-trail.aspx', type: 'trailhead'}
];

function initMap() {
  // Define custom map styles:
  var styles = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]
  // Constructor creates a new map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.338657, lng: -111.714654},
    zoom: 17,
    mapTypeControl: false,
    styles: styles
  })
};
