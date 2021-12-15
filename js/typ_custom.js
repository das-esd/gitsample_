jQuery(document).ready(function($) {

/*	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.clientbtn").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .project-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.blogbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		loadScript();
		return false;
	}); */

	$(".project-item a.omission").click(function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideUp('slow');
		$(".our-sec").slideDown('slow');
		return false;
	});


	$(".project-item a.oaim").click(function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideUp('slow');
		$(".our-sec").slideDown('slow');
		return false;
	});
	$(".project-item a.ostrength").click(function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideUp('slow');
		$(".our-sec").slideDown('slow');
		return false;
	});
	$(".project-item a.ovalues").click(function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideUp('slow');
		$(".our-sec").slideDown('slow');
		return false;
	});


	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});


	$("#gobackhome").click(function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		$("#menu-container .homepage").slideDown('slow');
		$(".content").slideDown('slow');
		$(".our-sec").slideUp('slow');
		return false;
	});

});





/* When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var mynav = document.getElementById('mynav');
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    mynav.style.position = "fixed";
	 
  } else {
    mynav.style.position = "relative";
  }
}*/