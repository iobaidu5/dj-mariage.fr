
function setREVStartSize(e) {
    try {
        var i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) { f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e) }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) { var u = (e.c.width(), jQuery(window).height()); if (void 0 != e.fullScreenOffsetContainer) { var c = e.fullScreenOffsetContainer.split(","); if (c) jQuery.each(c, function (e, i) { u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0)) } f = u } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight); e.c.closest(".rev_slider_wrapper").css({ height: f })
    } catch (d) { console.log("Failure at Presize of Slider:" + d) }
};

var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss = ".persephone.tparrows{background:rgba(201,201,201,0) !important}.persephone.tparrows{background:rgba(201,201,201,0) !important}";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss = "";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}


setREVStartSize({ c: jQuery('#rev_slider_10_1'), gridwidth: [1920], gridheight: [880], sliderLayout: 'fullwidth' });

var revapi10,
    tpj = jQuery;

tpj(document).ready(function () {
    if (tpj("#rev_slider_10_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_10_1");
    } else {
        revapi10 = tpj("#rev_slider_10_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//demo1.wpopal.com/grenda/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: "persephone",
                    enable: true,
                    rtl: true,
                    hide_onmobile: true,
                    hide_under: 768,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    }
                }
            },
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: 1920,
            gridheight: 880,
            lazyType: "none",
            shadow: 0,
            spinner: "spinner0",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }

});

var htmlDivCss = unescape(".persephone.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3Argba%28201%2C201%2C201%2C0.75%29%3B%0A%09width%3A80px%3B%0A%09height%3A80px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border%3A1px%20solid%20rgba%28255%2C%20255%2C%20255%2C%200.1%29%3B%0A%7D%0A.persephone.tparrows%3Ahover%20%7B%0A%09background%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A.persephone.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A15px%3B%0A%09color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2080px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.persephone.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce824%22%3B%0A%7D%0A.persephone.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce825%0A%22%3B%0A%7D%0A%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}

function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
}

