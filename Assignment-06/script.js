$(document).ready(function () {
    $('.slider').slick({
        infinite: true, // Loop the slides
        speed: 500, // Transition speed
        slidesToShow: 4, // Number of slides visible on large screens
        slidesToScroll: 1, // Number of slides to scroll per click
        arrows: false, // Disable default arrows
        dots: false, // Disable dots
        responsive: [
            {
                breakpoint: 1024, // Screen size <= 1024px
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Screen size <= 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576, // Screen size <= 576px (mobile view)
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                },
            },
        ],
    });



    $('.sliderPrev').on('click', function () {
        $('.slider').slick('slickPrev');
    });

    $('.sliderNext').on('click', function () {
        $('.slider').slick('slickNext');
    });
});
