/**
 * WEBSITE: #!
 * TWITTER: #!
 * FACEBOOK: #!
 * GITHUB: #!
 */




(function ($) {

    'use strict';

    // =========================
    // AOS Animation
    // =========================
    if (typeof AOS !== "undefined") {
        AOS.init({
            once: true,
            duration: 800
        });
    }

    // =========================
    // Owl Carousel
    // =========================
    if ($('.owl-carousel').length && $.fn.owlCarousel) {

        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            dots: false,
            nav: false
        });

    }

    // =========================
    // Shuffle Portfolio Filter
    // =========================
    var shuffleElement = document.querySelector('.shuffle-wrapper');

    if (shuffleElement && typeof Shuffle !== "undefined") {

        var myShuffle = new Shuffle(shuffleElement, {
            itemSelector: '.shuffle-item',
            buffer: 1
        });

        $('input[name="shuffle-filter"]').on('change', function (evt) {

            var input = evt.currentTarget;

            if (input.checked) {
                myShuffle.filter(input.value);
            }

        });

    }

    // =========================
    // Magnific Popup
    // =========================
    if ($.fn.magnificPopup) {

        $('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    }

    // =========================
    // Sticky Navbar
    // =========================
    $(window).scroll(function () {

        if ($(window).scrollTop() > 50) {

            $('#navbar').addClass('fixed-top shadow');

        } else {

            $('#navbar').removeClass('fixed-top shadow');

        }

    });

})(jQuery);