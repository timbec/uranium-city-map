(function(window, google, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = new mapster.create(element, options);
  map.zoom(14); 
  //alert(map.zoom()); 

  // map._on('click', function(e) {
  // 	alert('click'); 
  // 	console.log(e);
  // 	console.log(this); 
  // }); 

  var marker = new google.maps.Marker({
  	position: {
  	  lat: 59.556325,
      lng: -108.614444
  	}, 
  	map:map.gMap, 
  	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  }); 

   var marker2 = new google.maps.Marker({
  	position: {
  	  lat: 59.5548325,
      lng: -108.604444
  	}, 
  	map:map.gMap, 
  	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  }); 

  console.log(marker2); 
  
}(window, google, window.Mapster));