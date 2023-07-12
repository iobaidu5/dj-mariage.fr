(function () {

    "use strict";

    jQuery(document).ready(function ($) {
         //show popup video
        $("a[rel^='prettyPhoto[videos]']").prettyPhoto({
            animation_speed:'normal',
            theme:'light_square',
            social_tools: false,
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 800,
            default_height: 450,
        });    
        //show Gallery
        $("a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed:'normal',
            theme:'light_square',
            social_tools: false,
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 800,
            default_height: 450,
        });
         //Gallery photo
        $("a[data-gal^='prettyPhoto[pp_gal]']").prettyPhoto({
            animation_speed:'normal',
            theme:'light_square',
            social_tools: false,
        });


        /**********************************************************************
         * Login Ajax
         **********************************************************************/
        $('#pbrlostpasswordform').hide();
        $('#modalLoginForm form .btn-cancel').on('click', function () {
            $('#modalLoginForm').modal('hide');
        });


        // sign in proccess
        $('form.login-form').on('submit', function () {
            var $this = $(this);
            $('.alert', this).remove();
            $.ajax({
                url: grendaAjax.ajaxurl,
                type: 'POST',
                dataType: 'json',
                data: $(this).serialize() + "&action=pbrajaxlogin"
            }).done(function (data) {
                if (data.loggedin) {
                    $this.prepend('<div class="alert alert-info">' + data.message + '</div>');
                    location.reload();
                } else {
                    $this.prepend('<div class="alert alert-warning">' + data.message + '</div>');
                }
            });
            return false;
        });
        $('form .toggle-links').on('click', function () {
            $('.form-wrapper').hide();
            $($(this).attr('href')).show();
            return false;
        });

        // sign in proccess
        $('form.lostpassword-form').on('submit', function () {
            var $this = $(this);
            $('.alert', this).remove();
            $.ajax({
                url: grendaAjax.ajaxurl,
                type: 'POST',
                dataType: 'json',
                data: $(this).serialize() + "&action=pbrajaxlostpass"
            }).done(function (data) {
                if (data.loggedin) {
                    $this.prepend('<div class="alert alert-info">' + data.message + '</div>');
                    location.reload();
                } else {
                    $this.prepend('<div class="alert alert-warning">' + data.message + '</div>');
                }
            });
            return false;
        });


        //Sticky menu header

        var nav = jQuery('.has-sticky');
        if (nav) {
            var fixedSection = $('.has-sticky');
            // sticky nav
            var headerHeight = fixedSection.outerHeight();

            var wpadminbar   = 0;
            if ($("#wpadminbar").length > 0) {
                wpadminbar = $('#wpadminbar').height();
            }
            //fixedSection.addClass('animated');
            fixedSection.before('<div class="nav-placeholder"></div>');
            $('.nav-placeholder').height('inherit');
            //add class

            jQuery(window).scroll(function () {
                if ($(this).scrollTop() > 0) {
                    nav.addClass("keeptop").css('top', wpadminbar);
                } else {
                    nav.removeClass("keeptop");
                }
            });
        }

        //Offcanvas Menu
        $('[data-toggle="offcanvas"], .btn-offcanvas').on('click', function () {
            $('.row-offcanvas').toggleClass('active');
            $('#pbr-off-canvas').toggleClass('active');
        });
           //add class menu
        $("#main-menu-offcanvas li").has("ul").append("<b></b>");
        $("#main-menu-offcanvas li").has("ul").find("b").addClass("caret");
        $("#main-menu-offcanvas").find(".sub-menu ").addClass("dropdown-menu");

        //mobile click
        $('#main-menu-offcanvas .caret').on('click', function () {
            var $a = jQuery(this);
            $a.parent().find('> .dropdown-menu').slideToggle();
            if ($a.parent().hasClass('level-0')) {
                if ($a.parent().hasClass('show')) {
                    $a.parent().removeClass('show');
                } else {
                    $a.parents('li').siblings('li').find('ul:visible').slideUp().parent().removeClass('show');
                    $a.parent().addClass('show');
                }
            }

        });

        $('.showright').on('click', function () {
            $('.offcanvas-showright').toggleClass('active');
        });


        /*---------------------------------------------- 
         *    Apply Filter        
         *----------------------------------------------*/
        jQuery('.isotope-filter li a').on('click', function () {

            var parentul = jQuery(this).parents('ul.isotope-filter').data('related-grid');
            jQuery(this).parents('ul.isotope-filter').find('li a').removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).attr('data-option-value');
            jQuery('#' + parentul).isotope({filter: selector}, function () {
            });

            return (false);
        });

        /**
         *
         */
        $(".dropdown-toggle-overlay").on('click', function () {
            $($(this).data('target')).addClass("active");
        });

        $(".dropdown-toggle-button").on('click', function () {
            $($(this).data('target')).removeClass("active");
            return false;
        });

        /**
         *
         * Automatic apply  OWL carousel
         */
        $(".owl-carousel-play .owl-carousel").each(function () {
            var config = {
                navigation: $(this).data('navigation'), // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                pagination: $(this).data('pagination'),
                navigationText : ["prev", "next"],
                autoHeight: true
            };

            var owl = $(this);
            if ($(this).data('slide') == 1) {
                config.singleItem = true;
            } else {
                config.items = $(this).data('slide');
            }
            if ($(this).data('desktop')) {
                config.itemsDesktop = $(this).data('desktop');
            }
            if ($(this).data('desktopsmall')) {
                config.itemsDesktopSmall = $(this).data('desktopsmall');
            }
            if ($(this).data('desktopsmall')) {
                config.itemsTablet = $(this).data('tablet');
            }
            if ($(this).data('tabletsmall')) {
                config.itemsTabletSmall = $(this).data('tabletsmall');
            }
            if ($(this).data('mobile')) {
                config.itemsMobile = $(this).data('mobile');
            }
            if ($('.pbr-owl-thumbs li', $(this).parent()).length > 0) {
                config.afterAction = function () {
                    $('.pbr-owl-thumbs li').removeClass('active');
                    $('.pbr-owl-thumbs li').eq(this.owl.currentItem).addClass('active');
                };
            }
            $(this).owlCarousel(config);

            if( $(this).data('jumpto') ){
                owl.trigger('owl.jumpTo', $(this).data('jumpto') )
            }
            $('.left', $(this).parent()).on('click', function () {
                owl.trigger('owl.prev');
                return false;
            });
            $('.right', $(this).parent()).on('click', function () {
                owl.trigger('owl.next');
                return false;
            });
            $('.thumbs li', $(this)).on('click', function () {
                owl.trigger('owl.next');
                return false;
            });
            $('.pbr-owl-thumbs li', $(this).parent()).on('click', function () {
                var index = $(this).index();
                owl.trigger('owl.goTo', index);
                $('.pbr-owl-thumbs li').removeClass('active');
                $(this).addClass('active');
                return false;
            });
            //
            
        });
        /**
         *
         */
        if ($('.page-static-left')) {
            $('.page-static-left .button-action').on('click', function () {
                $('.page-static-left').toggleClass('active');
            });
        }

        //fix map
        if ($('.wpb_map_wraper').length > 0) {
            $('.wpb_map_wraper').on('click', function () {
                $('.wpb_map_wraper iframe').css("pointer-events", "auto");
            });

            $(".wpb_map_wraper").mouseleave(function () {
                $('.wpb_map_wraper iframe').css("pointer-events", "none");
            });
        }
        //counter up
        if ($('.counterUp').length > 0) {
            $('.counterUp').counterUp({
                delay: 10,
                time: 1500
            });
        }

        if ($('html').attr('dir') === 'rtl') {
            $('[data-vc-full-width="true"]').each(function (i, v) {
                $(this).css('right', -$(this).offset().left).css('left', 'auto');
            });
        }
        jQuery('.scrollup').on('click', function () {
            jQuery("html, body").animate({scrollTop: 0}, 600);
            return false;
        });

        $(window).load(function() {
            if($('.isotope-masonry').length > 0){
                 $('.isotope-masonry').isotope();
             }
        });
// custom js for me
        // padding breadscrumb
        if(!$('.pbr-breadscrumb').length){
            if(!$('.rev_slider_wrapper').length){
                $('#pbr-masthead').addClass('not-breadscrumb')
            }
        }
        //add class menu
        if($('.header-menu .pbr-mainmenu > .navbar').length > 1){
            $('.header-menu').addClass('nav-full')
        }
        //waypoint transition
        $(".widget-text-heading").waypoint(function(){
            $(this).addClass("heading-box");
            }, { offset: '100%'});
        
        $(".pbr-breadscrumb").waypoint(function(){
            $(this).addClass("heading-box");
            }, { offset: '100%'});

        // add padding slide gallery
        $(document).load($(window).bind("resize", tocategoryfixed));
        function tocategoryfixed() {
            var width = $(window).width();
            if(width >= 1400){
                var main_container  = jQuery(".widget-gallery .owl-item").width();
                var width_sum    = main_container/2;
                $('.widget-gallery .owl-wrapper').css('padding-left', width_sum);
                $('.widget-gallery .owl-wrapper').css('padding-right', width_sum);
                $('.widget-gallery .owl-buttons .owl-prev').css('left', width_sum-60);
                $('.widget-gallery .owl-buttons .owl-next').css('right', width_sum-60);
            }
        }
        tocategoryfixed();
        $(window).resize(function() {
            tocategoryfixed();
        });

        //Google map
        var opalMap = $( '.opal-google-maps' );
        if(opalMap.length > 0){
            for ( var i = 0; i < opalMap.length; i++ ) {
                var mapElement = $( opalMap[i] );
                grenda_vc_render_map( opalMap[i], mapElement.data() );
            }
        }
    });
})(jQuery);

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function grenda_vc_render_map( ele, options ) {
    var defaults = {
        // How zoomed in you want the map to start at (always required)
            zoom       : 11,
            scrollwheel: false,
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers"    : [{"color": "#000000"}, {"lightness": 17}]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers"    : [{"color": "#000000"}, {"lightness": 20}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers"    : [{"color": "#000000"}, {"lightness": 17}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers"    : [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers"    : [{"color": "#000000"}, {"lightness": 18}]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers"    : [{"color": "#000000"}, {"lightness": 16}]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers"    : [{"color": "#000000"}, {"lightness": 21}]
            }, {
                "elementType": "labels.text.stroke",
                "stylers"    : [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
            }, {
                "elementType": "labels.text.fill",
                "stylers"    : [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
            }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers"    : [{"color": "#000000"}, {"lightness":20}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fhill",
                "stylers"    : [{"color": "#000000"}, {"lightness": 20}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers"    : [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
            }]
    };
    options = jQuery.extend( {}, defaults, options );

    options.center = new google.maps.LatLng( parseFloat( options.lat ), parseFloat( options.lng ) );
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(ele, options);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: options.center,
        map: map,
        zoom: options.zoom
    });
}  
