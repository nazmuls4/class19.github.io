/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
	   // Carousel
        $('.homepage-slider').owlCarousel({
            items: 1,
            autoPlay: true,
            dots: false,
            nav: true,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></>", "<i class='fa fa-angle-right'></>"],
			mouseDrag: true,
            touchDrag: false,
        });
        
    });

	

    jQuery(window).load(function() {
		

    });




}(jQuery));