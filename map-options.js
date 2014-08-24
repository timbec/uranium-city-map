(function(window, google, mapster) {
  
  mapster.MAP_OPTIONS = {
    center: {
      lat: 59.5658326,
      lng: -108.614444
    },
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }, 
    cluster: {
      options: {
        styles: [{
          url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
          height: 56,
          width: 55,
          textColor: '#F00',
          textSize: 18
        },{
          url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png',
          height: 56,
          width: 55
        }]
      }
    }
  };
  
}(window, google, window.Mapster || (window.Mapster = {})))