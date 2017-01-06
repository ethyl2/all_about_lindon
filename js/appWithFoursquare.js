var map;
var markers;
var defaultIcon = 'img/blue.png';
var highlightedIcon = 'img/yellow.png';
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var placeInfowindow;

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

// Sort the locations into alphetical order
locations.sort(function (left, right) {
 return left.title == right.title ? 0 : (left.title < right.title ? -1 : 1)
  });

var types = [
  {title: 'Pools', keyword: 'pool'},
  {title:'Buildings', keyword: 'building'},
  {title:'Parks', keyword: 'park'},
  {title: 'Geocaches', keyword: 'geocache'},
  {title: 'Trailheads', keyword: 'trailhead'},
  {title: 'Restaurants', keyword: 'restaurant'}
];

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
  {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}
];

function initMap() {

  // Constructor creates a new map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.338657, lng: -111.714654},
    zoom: 15,
    mapTypeControl: false,
    styles: styles
  });

  // Create instance of Infowindow
  placeInfowindow = new google.maps.InfoWindow();

  // Variable for bounds
  var bounds = new google.maps.LatLngBounds();

  // Variables for markers
  markers = [];
  var labelIndex = 0;

  // Marker constructor
  for (var i = 0; i < locations.length; i++) {
    // Get the position, title and url from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    var url = locations[i].url;
    var type = locations[i].type;

    // Create a marker per location.
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i,
      url: url,
      map: map,
      label: labels[labelIndex % labels.length],
      icon: defaultIcon,
      type: type
    });

    labelIndex++;

    // Push the marker to markers array.
    markers.push(marker);
    bounds.extend(markers[i].position);

    // Event listener for clicking on markers.
    var oldMarkerId = -1;
    marker.addListener('click', function() {
      // First, maker sure that no lis from before are still highlighted
      var $placeLis = document.getElementsByClassName('place');
      for (var i = 0; i < $placeLis.length; i++) {
        $placeLis[i].classList.remove('markerSelected');
      }
      // If marker is moving, stop the movement, change it back to default color
      // and remove highlighting from its corresponding li.
      if (this.getAnimation() !== null) {
          this.setAnimation(null);
          this.setIcon(defaultIcon);
          var $selectedLi = document.getElementById(this.id);
          $selectedLi.classList.remove('markerSelected');
      } else {
        // Trigger bounce, highlighted marker color, and infoWindow display
        //  if the marker was not moving.
        this.setAnimation(google.maps.Animation.BOUNCE);
        this.setIcon(highlightedIcon);
        populateInfoWindow(this, placeInfowindow);
        // Remove the bouce from the previously selected marker
        if (oldMarkerId > -1) {
          markers[oldMarkerId].setAnimation(null);
        }
        // Highlight the new corresponding li
        var $selectedLi = document.getElementById(this.id);
        $selectedLi.classList.add('markerSelected');
        oldMarkerId = this.id;
      }
    }); // end Marker click event listener

    // Event listeners for mousein and mouseout of markers, changing colors
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    }); // end Marker mouseover event listener

    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    }); // end Marker mouseout event listener

  }; // end Marker constructor

  // Extend the bounds of the map to include all of the markers
  map.fitBounds(bounds);

}; // end initMap()

// Create content for InfoWindow
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.setContent('');
    infowindow.marker = marker;

    //Get data from Foursquare
    var foursquareUrl = "https://api.foursquare.com/v2/venues/search?ll=" +
      marker.position.lat() + "," + marker.position.lng() + "&client_id=O0T2TK0SJYKXMQRDW11MRSII4TB4GMKDPDJ0DEK2XC0YSVEW" +
      "&client_secret=2E2LGIFQQVC4405T5M21CPVHCLB2A0V1MIYYKSVKVWUSIDFW&v=20161225";

    $.getJSON(foursquareUrl, function (data) {
      var results = data.response.venues[0];
      if (results != null) {
        // Category
        if (results.categories[0].name) {
          var categoryName = results.categories[0].shortName;
        } else {
          var categoryName = "No category could be found";
        }

        // Phone
        if (results.contact.formattedPhone) {
          var phone = results.contact.formattedPhone;
        } else {
        var phone = "No phone number found.";
        }

        // Address
        if (results.location.formattedAddress) {
          var address = results.location.formattedAddress;
        } else {
          var address = "No address found.";
        }

        // Latitude
        if (results.location.lat) {
          var foursquareLat = results.location.lat;
        } else {
          var foursquareLat = 'No latitude found.';
        }

        // Longitude
        if (results.location.lat) {
          var foursquareLng = results.location.lng;
        } else {
          var foursquareLng = 'No longitude found.';
        }

        // Put all of the foursquare data in the infoWindow
        infowindow.setContent('<div><a href="' + marker.url + '"target="_new">'
          + marker.title + '</a><br>' + categoryName + ' ' + marker.type
          + '<br>' + phone + '<br>' + address + '<br>Lat: ' + foursquareLat
          + '<br>Lng: ' + foursquareLng +'</div>');

      } else {
        console.log("No venues found on FourSquare");
        infowindow.setContent('<div><a href="' + marker.url + '"target="_new">' + marker.title
          + '</a><br>Foursquare Data could not be loaded. Please try again later.</div>');
      }
    }).fail(function() {
      console.log("Foursquare Data Could Not Be Loaded");
      infowindow.setContent('<div><a href="' + marker.url + '"target="_new">' + marker.title
        + '</a><br>Foursquare Data could not be loaded. Please try again later.</div>');
    });
  }
  infowindow.open(map, marker);

  // Make sure the marker property is cleared and marker has default behavior
  // if the infowindow is closed.
  infowindow.addListener('closeclick', function() {
    infowindow.marker = null;
    marker.setAnimation(null);
    marker.setIcon(defaultIcon);
  });
}; // end populateInfoWindow()

// Place object constructor
var Place = function(data) {
  this.title = ko.observable(data.title);
  this.location = ko.observable(data.location);
  this.url = ko.observable(data.url);
  this.type = ko.observable(data.type);
  this.id = ko.observable();
};

var viewModel = function() {
  var self = this;

  // Make an observable array containing all of the locations
  // and create a id for each one.
  self.placesList = ko.observableArray([]);
  for (var i = 0; i < locations.length; i++) {
    self.placesList.push(new Place(locations[i]));
    self.placesList()[i].id(i);
  }
  // Put places in alphabetical order according to title
  self.placesList.sort(function (left, right) {
    return left.title() == right.title() ? 0 : (left.title() < right.title() ? -1 : 1) });

  // self.currentPlace and self.currentMarker for self.placesList click event
  self.currentPlace = ko.observable(this.placesList()[0]);
  console.log(self.currentPlace().title());
  self.currentMarker = ko.observable();

  // Click event highlights and bounces the corresponding marker and displays its
  // infoWindow
  self.setCurrentPlace = function(place) {

    // First, if currentMarker had previous value, set marker icon of previous
    // currentMarker to default and cancel animation
    if (self.currentMarker() != null) {
      self.currentMarker().setIcon(defaultIcon);
      self.currentMarker().setAnimation(null);

      // Also, remove the highlighted style of the previously selected li
      var $selectedLi = document.getElementById(self.currentPlace().id());
      $selectedLi.classList.remove('markerSelected');
      console.log("Removed 'markerSelected' class");
    }

    // Ready to display the new selection
    self.currentPlace(place);
    console.log("currentPlace is " + self.currentPlace().title() + ".");
    self.currentMarker(markers[self.currentPlace().id()]);
    self.currentMarker().setIcon(highlightedIcon);
    self.currentMarker().setAnimation(google.maps.Animation.BOUNCE);
    populateInfoWindow(self.currentMarker(), placeInfowindow);

    // Highlight the li when selected
    $selectedLi = document.getElementById(self.currentPlace().id());
    $selectedLi.classList.add('markerSelected');
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
    self.removedPlaces(self.placesList.remove(function (item) {
      return item.type() != placeType.keyword;
    }));

    // Highlight the markers whose places are the placeType, and remove the rest
    // from the map.
    var labelIndex = 0;
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].type == placeType.keyword) {
        markers[i].setIcon(highlightedIcon);
        markers[i].label = labels[labelIndex % labels.length];
        labelIndex++;
      } else {
        markers[i].setMap(null);
      }
    }
  };

  // Restore the complete placesList by adding places in self.removedPlaces
  self.showAllPlaces = function() {
    for (var i = 0; i < self.removedPlaces().length; i++) {
      self.placesList.push(self.removedPlaces()[i]);
    }

    // Put places back in alphabetical order in self.placesList according to title
    self.placesList.sort(function (left, right) {
      return left.title() == right.title() ? 0 : (left.title() < right.title() ? -1 : 1)
    });

    // Empty the self.removedPlaces so they won't be added again by accident.
    self.removedPlaces.removeAll();
    // Restore display of all markers.
    var labelIndex = 0;
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      markers[i].setIcon(defaultIcon);
      markers[i].label = labels[labelIndex % labels.length];
      labelIndex++;
    }
  };

}; //end of ViewModel

ko.applyBindings(new viewModel());

function hideList() {
    console.log("Time to hide the list");
    //TODO: Add functionality and toggle ability
}
