$(function () {
    hyundaicard.init();
})
var hyundaicard = {
    init: function () {
        hyundaicard.threeSlideshow()
        hyundaicard.singleSlideshow()
        hyundaicard.fadeSlideshow()
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

};