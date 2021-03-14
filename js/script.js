$(document).ready(function () {
    $('.slider-wrapper').slick({
        dots: true,
        speed: 500,
        slidesToShow: 3,
        appendArrows: $('.slider-wrapper'),
        appendDots: $('.slider-pagination'),
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        }, {

            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
    });
});

