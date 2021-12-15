$(document).ready(function() {
    
    $("#menu-container .content").slideUp('slow');
    $("#menu-container .about-section").slideDown('slow');
    return false;
});


jQuery(document).ready(function($) {


	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});




});







/*
function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

	function initialize() {
	    var mapOptions = {
	      zoom: 15,
	      center: new google.maps.LatLng(16.8496189,96.1288854)
	    };
	    var map = new google.maps.Map(document.getElementById('map_canvas'),  mapOptions);
	}



 When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var mynav = document.getElementById('mynav');
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    mynav.style.position = "fixed";
	 
  } else {
    mynav.style.position = "relative";
  }
}*/