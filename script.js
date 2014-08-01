(function(window, google, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = new mapster.create(element, options);
  map.zoom(14); 
  //alert(map.zoom()); 
  
}(window, google, window.Mapster));