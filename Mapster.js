(function(window, google) {

	var Mapster = (function() {
		function Mapster(element, opts) {
			this.gMap = new google.maps.Map(element, opts); 
		}
		Mapster.prototype = {
			zoom: function(level) {
				if (level) {
				this.gMap.setZoom(level);
			} else {
				return this.gMap.getZoom(); 
			}
		}, 
		_on: function(event, callback) {
			//calls 'this' before function - so it will be Mapster
			var self = this; 
			google.maps.event.addListener(this.gMap, 'click', function(e) {
				callback.call(self, e); 
			});  
		}
	}; 
		return Mapster; 
	}()); 

	Mapster.create = function(element, opts) {
		return new Mapster(element, opts); 
	}; 

	window.Mapster = Mapster; 

}(window, google))