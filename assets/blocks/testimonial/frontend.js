jQuery(document).ready(function ($) {
    $(".advgb-testimonial.slider-view").each(function () {
        var wrapper = $(this).closest('.advgb-testimonial-wrapper'),
            col = parseInt(wrapper.data('col')),
            scrollItems = parseInt(wrapper.data('scroll')),
            pauseOnHover = wrapper.data('pause'),
            autoPlay = wrapper.data('autoplay'),
            autoPlaySpeed = parseInt(wrapper.data('apspeed')),
            loop = wrapper.data('loop'),
            speed = parseInt(wrapper.data('speed')),
            dotsShown = wrapper.data('dots'),
            arrowsShown = wrapper.data('arrows');

        $(this).slick({
            infinite: loop,
            slidesToShow: col,
            slidesToScroll: Math.min(scrollItems, col),
            pauseOnHover: pauseOnHover,
            autoplay: autoPlay,
            autoplaySpeed: autoPlaySpeed,
            dots: dotsShown,
            arrows: arrowsShown,
            speed: speed,
            prevArrow: wrapper.find('.advgb-slider-prev'),
            nextArrow: wrapper.find('.advgb-slider-next')
        })
    })
});