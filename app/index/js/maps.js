/*
*  Functionality of maps on diferent pages
*
*  1. index.html 
*  2. browse-place-with-map.html
*  3. contact-us.html
*  4. events.html
*  5. item-details.html
/ 


/* 1. index.html */ 
if ($('#middle-map').length > 0) {
    function middleMap(){

    	var loc1, loc2, loc3, loc4, loc5, loc6, map, marker1, marker2, marker3, marker4, infobox1, infobox2, infobox3, infobox4;
        var center = new google.maps.LatLng(40.560860, -74.323708);

        // loading locations 
	        loc1 = new google.maps.LatLng(40.560871, -74.283708);
	        loc2 = new google.maps.LatLng(40.589154, -74.335616);
	        loc3 = new google.maps.LatLng(40.510156, -74.398417);
	        loc4 = new google.maps.LatLng(40.527526, -74.331606); 

	    // loading map
	        map = new google.maps.Map(document.getElementById("middle-map"), {
	            zoom: 12,
	            center: center,
                scrollwheel: false,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
	            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
	            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
	            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
          	});

        // loading markers on map
        	marker1 = new MarkerWithLabel({
        	    position: loc1,
        	    map: map,
        	    draggable: true,
        	    zIndex: 1,
        	    labelText: '<i class="flaticon-beer"></i>',
        	    labelClass: "labels",
        	    labelZIndex: 3,
        	    icon: { url: "images/icon-map.png"}
        	});

        	marker2 = new MarkerWithLabel({
		        position: loc2,
        	    map: map,
        	    draggable: true,
        	    zIndex: 1,
        	    labelText: '<i class="flaticon-hamburger"></i>',
        	    labelClass: "labels",
        	    labelZIndex: 3,
        	    icon: { url: "images/icon-map.png"}
        	});

        	marker3 = new MarkerWithLabel({
        		position: loc3,
        	    map: map,
        	    draggable: true,
        	    zIndex: 1,
        	    labelText: '<i class="flaticon-musical-note"></i>',
        	    labelClass: "labels",
        	    labelZIndex: 3,
        	    icon: { url: "images/icon-map.png"}
        	});
        	marker4 = new MarkerWithLabel({
        		position: loc4,
        	    map: map,
        	    draggable: true,
        	    zIndex: 1,
        	    labelText: '<i class="flaticon-chocolate"></i>',
        	    labelClass: "labels",
        	    labelZIndex: 3,
        	    icon: { url: "images/icon-map.png"}
        	});
        	
	     //loading infoboxes
	     	var infobox1 = new InfoBox({
	            content: document.getElementById("map-place1"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	     	var infobox2 = new InfoBox({
	            content: document.getElementById("map-place2"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	     	var infobox3 = new InfoBox({
	            content: document.getElementById("map-place3"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	     	var infobox4 = new InfoBox({
	            content: document.getElementById("map-place4"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });

	    // closing info boxes
	    google.maps.event.addListener(marker1, "click", function (e) { infobox1.open(map, this); });
	    google.maps.event.addListener(map, 'click', function() {
            infobox1.close();
            infobox2.close();
            infobox3.close();
            infobox4.close();
        });
        google.maps.event.addListener(marker4, 'click', function() {
            infobox4.open(map, this);
            infobox3.close();
            infobox2.close();
            infobox1.close();
        });
        google.maps.event.addListener(marker3, 'click', function() {
            infobox3.open(map, this);
            infobox4.close();
            infobox2.close();
            infobox1.close();
        });
        google.maps.event.addListener(marker2, 'click', function() {
            infobox2.open(map, this);
            infobox3.close();
            infobox4.close();
            infobox1.close();
        });
        google.maps.event.addListener(marker1, 'click', function() {
            infobox1.open(map, this);
            infobox3.close();
            infobox2.close();
            infobox4.close();
        });


    };
    google.maps.event.addDomListener(window, 'load', middleMap);
};
/* end index.html */ 

/* 2. browse-place-with-map.html */
	
if ($('#browse-map').length > 0){
    function initialize(){

    	var loc1, loc2, loc3, loc4, loc5, map, marker1, marker2, marker3, marker4, marker5, infobox1, infobox2, infobox3, infobox4, infobox5;
        var center = new google.maps.LatLng(40.590860, -74.373708);

        // loading locations 
	        loc1 = new google.maps.LatLng(40.560871, -74.283708);
	        loc2 = new google.maps.LatLng(40.575339, -74.499981);
	        loc3 = new google.maps.LatLng(40.473478, -74.566546);
	        loc4 = new google.maps.LatLng(40.634678, -74.381417); 
	        loc5 = new google.maps.LatLng(40.632259, -74.814948); 

	    // loading map
	        map = new google.maps.Map(document.getElementById("browse-map"), {
	            zoom: 11,
	            center: center,
                scrollwheel: false,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
	            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
	            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
	            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
          	});

        // loading markers on map
        	marker1 = new MarkerWithLabel({
        	    labelText: '<i class="flaticon-beer"></i>',
				labelAnchor: new google.maps.Point(29, 45),
				labelClass: "labels",
				labelStyle: { opacity: 1,  },
				labelInBackground: false,
        		position: loc1,
	            map: map,
	            draggable: true,
	            raiseOnDrag: true,
	            icon: { url: "images/icon-map.png"}
        	});

        	marker2 = new MarkerWithLabel({
		        labelAnchor: new google.maps.Point(8, 40),
		        labelClass: "labels", // the CSS class for the label
		        labelText: '<i class="flaticon-candy"></i>',
		        labelVisible: true,
            	labelInBackground: false,
        		position: loc2,
        		draggable: true,
        		raiseOnDrag: true,
        		map: map,
        		icon: { url: "images/icon-map.png"}
        	});

        	marker3 = new MarkerWithLabel({
        		labelText: '<i class="flaticon-chocolate"></i>',
		        labelAnchor: new google.maps.Point(11, 40),
		        labelClass: "labels", // the CSS class for the label
		        labelStyle: {opacity: 1.0},
        		position: loc3,
        		draggable: true,
        		raiseOnDrag: true,
        		map: map,
	            icon: { url: "images/icon-map.png"}
        	});
        	marker4 = new MarkerWithLabel({
        		labelText: '<i class="flaticon-pizza"></i>',
		        labelAnchor: new google.maps.Point(29, 45),
		        labelClass: "labels", // the CSS class for the label
		        labelStyle: {opacity: 1.0},
        		position: loc4,
        		draggable: true,
        		raiseOnDrag: true,
        		map: map,
	            icon: { url: "images/icon-map.png"}
        	});
        	marker5 = new MarkerWithLabel({
        		labelText: '<i class="flaticon-musical-note"></i>',
		        labelAnchor: new google.maps.Point(29, 45),
		        labelClass: "labels", // the CSS class for the label
		        labelStyle: {opacity: 1.0},
        		position: loc5,
        		draggable: true,
        		raiseOnDrag: true,
        		map: map,
	            icon: { url: "images/icon-map.png"}
        	});
        	
	     //loading infoboxes
	     	var infobox1 = new InfoBox({
	            content: document.getElementById("map-place1"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	     	var infobox2 = new InfoBox({
	            content: document.getElementById("map-place2"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	     	var infobox3 = new InfoBox({
	            content: document.getElementById("map-place3"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	     	var infobox4 = new InfoBox({
	            content: document.getElementById("map-place4"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });
	        var infobox5 = new InfoBox({
	            content: document.getElementById("map-place5"),
	            pixelOffset: new google.maps.Size(-135, -390),
	            zIndex: null,
	            maxWidth: 150,
	        });

	    // closing info boxes
	    google.maps.event.addListener(marker1, "click", function (e) { infobox1.open(map, this); });
	    google.maps.event.addListener(map, 'click', function() {
            infobox1.close();
            infobox2.close();
            infobox3.close();
            infobox4.close();
            infobox5.close();
        });
        google.maps.event.addListener(marker5, 'click', function() {
            infobox5.open(map, this);
            infobox4.close();
            infobox3.close();
            infobox2.close();
            infobox1.close();
        });
        google.maps.event.addListener(marker4, 'click', function() {
            infobox4.open(map, this);
            infobox3.close();
            infobox2.close();
            infobox1.close();
            infobox5.close();
        });
        google.maps.event.addListener(marker3, 'click', function() {
            infobox3.open(map, this);
            infobox4.close();
            infobox2.close();
            infobox1.close();
            infobox5.close();
        });
        google.maps.event.addListener(marker2, 'click', function() {
            infobox2.open(map, this);
            infobox3.close();
            infobox4.close();
            infobox1.close();
            infobox5.close();
        });
        google.maps.event.addListener(marker1, 'click', function() {
            infobox1.open(map, this);
            infobox3.close();
            infobox2.close();
            infobox4.close();
            infobox5.close();
        });

    };
    google.maps.event.addDomListener(window, 'load', initialize);
}

/* end browse-place-with-map.html */ 

/* 3. contact-us.html */ 

if ($('#map').length > 0){
        var map;
        var image = "images/icon-map.png";
        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(40.960326,-74.137174),
                zoom: 12,
                zoomControl: false,
                disableDoubleClickZoom: true,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                panControl: true,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: true,
                overviewMapControlOptions: {
                    opened: false,
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
            }
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var locations = [
              [ 'Our Location', 'undefined', 'undefined', 'undefined', 'undefined', 40.9628758, -74.1329207, 'https://mapbuildr.com/assets/img/markers/default.png']
            ];
            for (i = 0; i < locations.length; i++) {
                if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
                if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
                if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
                    if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
                    if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
                        marker = new google.maps.Marker({
                            icon: image,
                            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                            map: map,
                            title: locations[i][0],
                            desc: description,
                            tel: telephone,
                            email: email,
                            web: web
                        });
                link = '';     
            }

          };
    google.maps.event.addDomListener(window, 'load', init);
}

/* /. contact-us.html */ 


/* 4. events.html */ 

    if ($('#events-map').length > 0) {
        google.maps.event.addDomListener(window, 'load', eventMap);
        
        function eventMap() {
                
            var mapOptions = {
                    zoom: 11,
                    scrollwheel: false,
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York
                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
            };

                var mapElement = document.getElementById('events-map');

                var map = new google.maps.Map(mapElement, mapOptions);
                var event1, event2, event3, event4, event5;

                event1 = new MarkerWithLabel({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    draggable: true,
                    raiseOnDrag: true,
                    map: map,
                    icon: { url: "images/icon-map.png"}
                });
                event2 = new MarkerWithLabel({
                    position: new google.maps.LatLng(40.706481, -74.245787),
                    draggable: true,
                    raiseOnDrag: true,
                    map: map,
                    icon: { url: "images/icon-map.png"}
                });
                event3 = new MarkerWithLabel({
                    position: new google.maps.LatLng(40.703265, -73.722099),
                    draggable: true,
                    raiseOnDrag: true,
                    map: map,
                    icon: { url: "images/icon-map.png"}
                });
                event4 = new MarkerWithLabel({
                    position: new google.maps.LatLng(40.609922, -74.073952),
                    draggable: true,
                    raiseOnDrag: true,
                    map: map,
                    icon: { url: "images/icon-map.png"}
                });
                event5 = new MarkerWithLabel({
                    position: new google.maps.LatLng(40.662357, -73.909390),
                    draggable: true,
                    raiseOnDrag: true,
                    map: map,
                    icon: { url: "images/icon-map.png"}
                });
        }
    } 
/* /. events.html */

/* 5. item-details.html */  
    if ($('#item-map').length > 0) {

        google.maps.event.addDomListener(window, 'load', init);
        var map;
        var image = "images/icon-map.png";
        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(40.960326,-74.137174),
                zoom: 12,
                zoomControl: false,
                disableDoubleClickZoom: true,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                panControl: true,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: true,
                overviewMapControlOptions: {
                    opened: false,
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fdeb06"},{"visibility":"on"}]}]
            }
            var mapElement = document.getElementById('item-map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var locations = [
              [ 'Our Location', 'undefined', 'undefined', 'undefined', 'undefined', 40.9628758, -74.1329207, 'https://mapbuildr.com/assets/img/markers/default.png']
            ];
            for (i = 0; i < locations.length; i++) {
               if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
               if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
               if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
               if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
               if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
                marker = new google.maps.Marker({
                    icon: image,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    title: locations[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });
          link = '';     }

        };
    }
/* /. item-details.html */  