/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
		
        jQuery(window).load(function(){
			jQuery(".testimonial-content-area").owlCarousel({			
				items: 1,
				loop: true,
				autoplay:  true,
				dots:  true,
				nav:  false,				
				
		});
			 
		});	
		
		 $('.magnifi-videos-n').magnificPopup({type:'video'});
		
		
		
		
    });

	

    jQuery(window).load(function() {
       

    });




}(jQuery));