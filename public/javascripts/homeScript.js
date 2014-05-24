$(document).ready( function() {
	//smooth scroll
		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

	//end smooth scroll
	var windowHeight = $(window).height();
	var landingHeight = $('.landing-page').height();

	$('.hero-text').css('margin-top', -landingHeight/2);
	$('.landing-page').css('height', windowHeight);

	$('.image-back').css('height', windowHeight);
})