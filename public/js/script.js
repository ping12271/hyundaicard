$(function () {
    hyundaicard.init();
})
var hyundaicard = {
    init: function () {
        hyundaicard.threeSlideshow()
        hyundaicard.singleSlideshow()
        hyundaicard.toggleSlide()
        hyundaicard.toggleClass()
        hyundaicard.toggleSlide()
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

    toggleClass: function () {
        $('.dropdown .name').on('click', function () {
            $('.dropdown .item').slideToggle(200);
            $('.icon').toggleClass('show');
        })
    },


    toggleSlide: function () {

        $('.nav-item').hover(function () {
            $('.inner').slideDown(100);
        }, function () {
            $('.inner').slideUp(100);
        })

    }

};