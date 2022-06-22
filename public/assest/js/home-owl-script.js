$(function () {

    carousel_only_1i_loop();

    function carousel_only_1i_loop() {
        var $carousels = $('.js-atbs-carousel-only-1i-loop');
        $carousels.each(function () {
            $(this).owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: true,
                dots: true,
                autoHeight: true,
                navText: ['<i class="mdicon mdicon-arrow_back"></i>', '<i class="mdicon mdicon-arrow_forward"></i>'],
                smartSpeed: 500,
                responsive: {
                    0: {
                        items: 1,
                    },
                },
            });
        })
    }

    carousel_2i_auto_width()

    function carousel_2i_auto_width() {
        var $carousels = $('.js-carousel-2i-auto-width');
        $carousels.each(function () {
            $(this).owlCarousel({
                items: 2,
                loop: true,
                nav: true,
                dots: true,
                autoWidth: true,
                autoHeight: true,
                smartSpeed: 700,
                margin: 0,
                navText: ['<i class="mdicon mdicon-arrow_back"></i>', '<i class="mdicon mdicon-arrow_forward"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        autoWidth: false,
                    },
                    768: {
                        margin: 0,
                        autoWidth: true,
                    },
                    992: {
                        margin: 0,
                    },
                    1200: {
                        margin: 0,
                    },
                    1450: {
                        margin: 0,
                    },
                    1500: {
                        margin: 0,
                    },
                    1671: {
                        margin: 0,
                    },
                },

            });
        })
    }

    carousel_3i30m_nav_svg()

    function carousel_3i30m_nav_svg () {
        var $carousels = $('.js-carousel-3i30m-nav-svg');
        $carousels.each( function() {
            $(this).owlCarousel({
                margin: 30,
                loop: true,
                nav: true,
                dots: true,
                navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{opacity:0.4;}.b{fill:none;stroke:#111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g class="a" transform="translate(21 17.533) rotate(180)"><line class="b" x2="20" transform="translate(0.5 10.167)"/><path class="b" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{fill:none;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(0 -2.8)"><line class="a" x2="20" transform="translate(0.5 10.167)"/><path class="a" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>'],
                responsive: {
                    0 : {
                        items: 1,
                    },

                    768 : {
                        items: 2,
                    },

                    992 : {
                        items: 3,
                    },
                },
            });
        })
    }
});


