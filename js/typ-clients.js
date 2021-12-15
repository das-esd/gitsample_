$(document).ready(function() {
    
    $("#menu-container .content").slideDown('slow');
    $("#menu-container .project-section").slideDown('slow');
    return false;
});

jQuery(document).ready(function($) {


	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});

	
	$('.oc-clients').click(function(){
		$('.oc-clients').hide();
		document.body.style.overflowY ='auto';
	});

	$('#ind-oc').click(function(){
		$('#oc-clrc').hide();$('#oc-clei').hide();
		$('#oc-clbo').hide();$('#oc-clco').hide();$('#oc-clre').hide();
		$('.oc-clients').show();
		$('#oc-clind').slideDown('slow');
		document.body.style.overflowY ='hidden';
	});
	$('#ei-oc').click(function(){
		$('#oc-clrc').hide();$('#oc-clind').hide();
		$('#oc-clbo').hide();$('#oc-clco').hide();$('#oc-clre').hide();
		$('.oc-clients').show();
		$('#oc-clei').slideDown('slow');
		document.body.style.overflowY ='hidden';
	});
	$('#rc-oc').click(function(){
		$('#oc-clind').hide();$('#oc-clei').hide();
		$('#oc-clbo').hide();$('#oc-clco').hide();$('#oc-clre').hide();
		$('.oc-clients').show();
		$('#oc-clrc').slideDown('slow');
		document.body.style.overflowY ='hidden';
	});
	$('#bo-oc').click(function(){
		$('#oc-clrc').hide();$('#oc-clei').hide();
		$('#oc-clind').hide();$('#oc-clco').hide();$('#oc-clre').hide();
		$('.oc-clients').show();
		$('#oc-clbo').slideDown('slow');
		document.body.style.overflowY ='hidden';
	});
	$('#co-oc').click(function(){
		$('#oc-clrc').hide();$('#oc-clei').hide();
		$('#oc-clbo').hide();$('#oc-clind').hide();$('#oc-clre').hide();
		$('.oc-clients').show();
		$('#oc-clco').slideDown('slow');
		document.body.style.overflowY ='hidden';
	});
	$('#re-oc').click(function(){
		$('#oc-clrc').hide();$('#oc-clei').hide();
		$('#oc-clbo').hide();$('#oc-clind').hide();$('#oc-clco').hide();
		$('.oc-clients').show();
		$('#oc-clre').slideDown('slow');
		document.body.style.overflowY ='hidden';
	});
	 
	$('#listbtn').click(function(){
		$('#clientlist').slideDown('slow');
	});
	$('#clientlist').click(function(){
		$('#clientlist').slideUp('slow');
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