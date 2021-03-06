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
    events: [{
      name: 'click', 
      callback: function(e, marker) {
        console.log(e, marker); 
      }
    }, {
      name: 'dragged', 
      callback: function() {
        console.log(e, marker); 
      }
    }],  
  	visible: true,
  	id: 'marker-2',
  	content: "<div class='info-box'>You are in Uranium City</div>", 
  	icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  }); 

  console.log(marker2); 
  
  //map.zoom(14); 

  /*Single Responsibility Principle: 
  A responsiblity is anything that has a tendency to change. 
  How we manage collection is dynamic and so can change. 

  Let's create a module that can manage any type of object in a collection. 
  */


//   var found = map.findBy(function(marker) {
//     return marker.id === 'marker-2'; 
//   });
// console.log(found);

  // map.removeBy(function(marker) {
  //   return marker.id === 'marker-2'; 
  // }); 

  // var randomArr = [1,2,3]; 

  // randomArr.forEach(function(item) {
  //   alert(item);
  // }); 

  // for( var i=0; i < 10; i++) {
  //   map.addMarker({
  //     id: marker-2, 
  //     lat: 59.570325 + Math.random(), 
  //     lng: -108.615554 + Math.random(),
  //     content: 'This is Uranium City', 
  //     icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  //   }); 

  //   var marker = map.addMarker({
  //     lat: 59.570325 + Math.random(), 
  //     lng: -108.605554 + Math.random(),
  //     content: 'This is outside Uranium City', 
  //     icon: "http://uraniumcity-history.com/wp-content/themes/uc-history-video/images/atomic-symbol.png"
  //   }); 
  // }
 
  
}(window, google, window.Mapster));