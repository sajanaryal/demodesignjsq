(function($) {
    'use strict';

    // Mean Menu JS
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Navbar Area
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 150) {
            $('.navbar-area').addClass("sticky-nav");
        } else {
            $('.navbar-area').removeClass("sticky-nav");
        }
    });



    $(".owl-carousel1").owlCarousel({
        loop: true,
        center: false,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false,
                loop: false
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    });
    $(".our_partner").owlCarousel({
        loop: true,
        center: false,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false,
                loop: false
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
    //    page load popup
    // $(window).ready(function() {
    //     setTimeout(function() {
    //         $('#modal-subscribe').modal("show")
    //     }, 500)
    // });
    // Others Option For Responsive JS
    $(".side-nav-responsive .dot-menu").on("click", function() {
        $(".side-nav-responsive .container .container").toggleClass("active");
    });

    /**
     * Hero carousel indicators
     */
    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });




})(jQuery);