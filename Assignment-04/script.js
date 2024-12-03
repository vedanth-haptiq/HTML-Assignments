$(document).ready(function () {
    $('.categoriesLists').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slickPrev"><span class="custom-prev-arrow"><img src="./IMAGES/left arrow.png" width="12" height="24" alt="prevArrow"></span></button>',
        nextArrow: '<button class="slickNext"><span class="custom-next-arrow"><img src="./IMAGES/right arrow.png" width="12" height="24" alt="nextArrow"></span></button>',
        arrows: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            }
        ]
    });


    $('.carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        prevArrow: '<button class="slickPrev"><span class="custom-prev-arrow"><img src="./IMAGES/left arrow.png" width="12" height="24" alt="prevArrow"></span></button>',
        nextArrow: '<button class="slickNext"><span class="custom-next-arrow"><img src="./IMAGES/right arrow.png" width="12" height="24" alt="nextArrow"></span></button>',
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    });
});