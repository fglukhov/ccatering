function initializeFooterMap() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(55.643612, 37.823518),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false
  }
  
  var map = new google.maps.Map(document.getElementById("contactsMap"),
      mapOptions);
      
  var image = 'images/map-pin.png';
  var myLatLng = new google.maps.LatLng(55.643612, 37.827518);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initializeFooterMap);