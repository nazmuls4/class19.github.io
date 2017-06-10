/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
		$(".list-filter li").on('click', function () {
            $(".list-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".project-item").isotope({
                filter: selector
            });
        });
        
    });

	

    jQuery(window).load(function() {
		$('.project-item').isotope();

    });




}(jQuery));