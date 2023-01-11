define(['jquery', 'owlcarousel'], function($) {
    $(document).ready(function() {
        if($(window).width() < 786) {
            owlInitialize();
        }
        $(window).resize(function() {
            if($(window).width() < 768) {
                $('.owl-carousel').owlCarousel();
                $('.steps').addClass("owl-carousel");
                owlInitialize();
            } else {
                $('.owl-carousel').owlCarousel('destroy');
                $('.steps').removeClass("owl-carousel");
            }
        });
        function owlInitialize() {
            $('.owl-carousel').owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                autoplay: false,
                autoplayHoverPause: false,
                margin: 10,
                responsive: {
                    0: {
                      items: 1
                    }
                }
            }); 
        }
        
    });
});