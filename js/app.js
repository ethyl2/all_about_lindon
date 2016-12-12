var map;

var locations = [
  {title: 'Lindon Aquatics Center', location: {lat: 40.340225, lng: -111.716937},
    url: 'http://www.lindonpool.org/', type: 'pool'},
  {title: 'Lindon Community Center', location: {lat: 40.339282, lng: -111.715786},
    url: 'http://www.lindoncity.org/lindon-community-center.htm', type: 'building'},
  {title: 'Lindon Pioneer Park', location: {lat: 40.335168, lng: -111.702404},
    url: 'http://www.lindoncity.org/parks.htm', type: 'park'},
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
  {title: 'Dry Canyon Trailhead', location: {lat: 40.341761, lng: -111.676819},
    url: 'https://fs.usda.gov/wps/portal/fsinternet/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gDfxMDT8MwRydLA1cj72BTJw8jAwjQL8h2VAQAzHJMsQ!!/?ss=110419&ttype=recarea&recid=19042&actid=104&navtype=BROWSEBYSUBJECT&position=BROWSEBYSUBJECT&navid=110000000000000&pnavid=null&cid=null&pname=Pleasant+Grove+Ranger+District+-+Dry+Canyon+Trail',
    type: 'trailhead'},
  {title: 'Lindon Murdoch Canal Trailhead', location: {lat: 40.343716, lng: -111.696934},
    url: 'http://www.traillink.com/trail/murdock-canal-trail.aspx', type: 'trailhead'},
  {title: 'Los Hermanos', location: {lat: 40.34472, lng: -111.723833},
    url: 'http://www.loshermanosutah.com/', type: 'restaurant'},
  {title: 'The Pizza Factory', location: {lat: 40.344537, lng: -111.722267},
    url: 'https://www.yelp.com/biz/the-pizza-factory-lindon', type: 'restaurant'},
  {title: 'The Smoking Apple', location: {lat: 40.33888, lng: -111.717276},
    url: 'http://smokingapplebbq.com/', type: 'restaurant'},
  {title: 'Galilee Grill and Bakery', location: {lat: 40.335595, lng: -111.714492},
    url: 'http://galileegrill.com/', type: 'restaurant'},
  {title: 'Big Island Sam\'s', location: {lat: 40.335413, lng: -111.714379},
    url: 'http://www.bigislandsams.com/', type: 'restaurant'},
  {title: 'O\'Crowley Irish Tacos and Juice Press', location: {lat: 40.335378, lng: -111.712513},
    url: 'http://www.irishtacos.com/', type: 'restaurant'},
  {title: 'Marley\'s Gourmet Sliders', location: {lat: 40.32682, lng: -111.736354},
    url: 'http://marleys.com/', type: 'restaurant'},
  {title: 'Tacos CDMX', location: {lat:40.348373, lng: -111.728374},
    url: 'http://tacoscdmx.com/', type: 'restaurant'}
];

var types = [
  {title: 'Pools', keyword: 'pool'},
  {title:'Buildings', keyword: 'building'},
  {title:'Parks', keyword: 'park'},
  {title: 'Geocaches', keyword: 'geocache'},
  {title: 'Trailheads', keyword: 'trailhead'},
  {title: 'Restaurants', keyword: 'restaurant'}
];

function initMap() {
  // Define custom map styles.
  // These styles are from https://snazzymaps.com/style/17/bright-and-bubbly
  var styles = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},
    {"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},
    {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},
    {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},
    {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},
    {"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},
    {"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},
    {"featureType":"road.highway","elementType":"labels.icon"},
    {"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},
    {"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},
    {"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},
    {"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},
    {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},
    {"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},
    {"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},
    {"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},
    {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},
    {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},
    {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}];

  // Constructor creates a new map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.338657, lng: -111.714654},
    zoom: 15,
    mapTypeControl: false,
    styles: styles
  });

  // Create instance of Infowindow
  var placeInfowindow = new google.maps.InfoWindow();

  // Variables for markers
  var markers = [];
  var labelIndex = 1;
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var defaultIcon = 'img/blue.png';
  var highlightedIcon = 'img/yellow.png';

  // Marker constructor
  for (var i = 0; i < locations.length; i++) {
    // Get the position, title and url from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    var url = locations[i].url;

    // Create a marker per location.
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i,
      url: url,
      map: map,
      label: labels[labelIndex % labels.length],
      icon: defaultIcon
    });

    labelIndex++;

    // Push the marker to markers array.
    markers.push(marker);

    // Event listener for clicking on markers.
    marker.addListener('click', function() {
      console.log("clicked on marker");
      // If marker is moving, stop the movement and change it back to default color.
      if (this.getAnimation() !== null) {
          this.setAnimation(null);
          this.setIcon(defaultIcon);
      } else {
      // Trigger bounce and highlighted color if the marker was not moving.
      this.setAnimation(google.maps.Animation.BOUNCE);
      this.setIcon(highlightedIcon);
      populateInfoWindow(this, placeInfowindow);
      }
    });
  };
};

// Create content for InfoWindow
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.setContent('');
    infowindow.marker = marker;
    infowindow.setContent('<div><a href="' + marker.url + '"target="_new">' + marker.title
     + '</a></div>');
    infowindow.open(map, marker);
  }
  // Make sure the marker property is cleared if the infowindow is closed.
  infowindow.addListener('closeclick', function() {
    infowindow.marker = null;
  });
};

// Place object contructor -- not used yet
var Place = function(data) {
  this.title = ko.observable(data.name);
  this.location = ko.observable(data.location);
  this.url = ko.observable(data.url);
  this.type = ko.observable(data.type);
};

// Display placesList
var viewModel = function() {
  var self = this;
  self.placesList = ko.observableArray([]);
  for (var i = 0; i < locations.length; i++) {
    this.placesList.push(locations[i]);
    //this.placesList.push(new Place(locations[i]));
  }

  self.currentPlace = ko.observable(this.placesList()[0]);
  self.setCurrentPlace = function(place) {
    self.currentPlace(place);
    console.log(self.currentPlace().title);
  }

  // Types list for filter
  self.typesList = ko.observableArray([]);
  for (var i = 0; i < types.length; i++) {
    this.typesList.push(types[i]);
  }

  // Store places removed by filter
  self.removedPlaces = ko.observableArray([]);

  self.filterPlaces = function(placeType) {
    // Remove all values whose type property is the selected place type,
    // and return them as self.removedPlaces.
    self.removedPlaces = self.placesList.remove(function (item)
      { return item.type != placeType.keyword;});
  };

  // Restore the complete placesList by adding places in self.removedPlaces
  self.showAllPlaces = function() {
    for (var i = 0; i < self.removedPlaces.length; i++) {
      self.placesList.push(self.removedPlaces[i]);
    }
  };

}; //end of ViewModel

ko.applyBindings(new viewModel());

function hideList() {
    console.log("Time to hide the list");
    //TODO: Add functionality and toggle ability
}
