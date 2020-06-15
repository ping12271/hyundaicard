$(function () {
    hyundaicard.init();
})
var hyundaicard = {
    init: function () {
        hyundaicard.threeSlideshow()
        hyundaicard.singleSlideshow()
        hyundaicard.fadeSlideshow()
        hyundaicard.navSlideshow()
        hyundaicard.backTop()
        hyundaicard.getScroll()
    },

    threeSlideshow: function () {
        $('.card-slideshow').slick({
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
        })
    },

    singleSlideshow: function () {
        $('.bank-slideshow, .culture-slideshow, .digital-slideshow, .event-slideshow, .notice-slideshow').slick({
            autoplay: true,
            arrows: false,
            dots: true,
        });
    },

    fadeSlideshow: function () {
        $('.nav-slideshow, .visual-slideshow').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    },

    navSlideshow: function () {
        $('.gallery-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.gallery-nav'
        });
        $('.gallery-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.gallery-for',
            centerMode: true,
            focusOnSelect: true
        });

    },



    getScroll: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            const headerHeight = $('#header').innerHeight();
            const visualHeight = $('.visual').innerHeight();

            if(scrollTop > 50) {
                $('html').addClass('show-backtop')
            } else {
                $('html').removeClass('show-backtop');
            }

            if(scrollTop > headerHeight) {
                $('html').addClass('show-title-b')
            } else {
                $('html').removeClass('show-title-b')
            }

            if(scrollTop > visualHeight) {
                $('html').addClass('show-title-w')
            } else {
                $('html').removeClass('show-title-w');
            }

            if(scrollTop > 5) {
                $('html').addClass('show-bar')
            } else {
                $('html').removeClass('show-bar');
            }

        })
    },

    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop:0
            },400)
        })
    }

};