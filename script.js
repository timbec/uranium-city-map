(function(window, google, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  // map.addMarker(59.556325, -108.614444); 

  var marker = map.addMarker({
  	lat: 59.556325, 
  	lng: -108.614444, 
  	draggable: true, 
  	visible: true,
  	id: 'marker-1',
  	content: "<div class='info-box'>You are in Martin Lake</div>", 
  	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  }); 

  var marker2 = map.addMarker({
  	lat: 59.570325, 
  	lng: -108.615554, 
  	draggable: true, 
  	visible: true,
  	id: 'marker-2',
  	content: "<div class='info-box'>You are in Uranium City</div>", 
  	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  }); 
  
  map.zoom(14); 


var found = map.findMarkerByLat(59.570325); 

console.log(found); 

  //console.log(marker2); 

  //console.log(map.markers);
  //alert(map.zoom()); 

  // map._on('click', function(e) {
  // 	alert('click'); 
  // 	console.log(e);
  // 	console.log(this); 
  // }); 

  // var marker = new google.maps.Marker({
  // 	position: {
  // 	  lat: 59.556325,
  //     lng: -108.614444
  // 	}, 
  // 	map:map.gMap, 
  // 	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  // }); 

  //  var marker2 = new google.maps.Marker({
  // 	position: {
  // 	  lat: 59.5548325,
  //     lng: -108.604444
  // 	}, 
  // 	map:map.gMap, 
  // 	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  // }); 

  // console.log(marker2); 
  
}(window, google, window.Mapster));