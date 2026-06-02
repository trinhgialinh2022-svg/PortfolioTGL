/**
 * WEBSITE: #!
 * TWITTER: #!
 * FACEBOOK: #!
 * GITHUB: #!
 */

/* trinh-gia-linh */


(function ($) {

    'use strict';

    // =========================
    // AOS Animation
    // =========================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800
        });
    }

    // =========================
    // Progress Skill Bar
    // =========================
    $(window).on('load', function () {

        $('.progress-bar').each(function () {

            var $bar = $(this);
            var percent = $bar.data('percent');

            if (!percent) return;

            $bar.css({
                width: '0%',
                transition: 'width 2s ease-in-out'
            });

            setTimeout(function () {
                $bar.css('width', percent + '%');
            }, 300);

        });

    });

    // =========================
    // Shuffle Portfolio Filter
    // (index.html)
    // =========================
    var shuffleElement = document.querySelector('.shuffle-wrapper');

    if (shuffleElement && typeof Shuffle !== 'undefined') {

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
    // Navbar Shadow on Scroll
    // =========================
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 50) {

            $('#navbar').addClass('shadow');

        } else {

            $('#navbar').removeClass('shadow');

        }

    });

    // =========================
    // Smooth Scroll
    // =========================
    $('a[href*="#"]').on('click', function (e) {

        var target = $(this.hash);

        if (target.length) {

            e.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 700);

        }

    });

})(jQuery);