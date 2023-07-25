$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  const nav = document.querySelector(".Navbar");
  window.addEventListener("scroll", fixNav);
  
  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("navbar-active");
     nav.removeAttribute('clip-path');
    } else {
      nav.classList.remove("navbar-active");
    }
  }
  
  var owl = $("#owl");
  owl.owlCarousel({
    items: 4,
    navigation: true,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fal fa-caret-left owlNav'></i>",
      "<i class='fal fa-caret-right owlNav'></i>",
    ],
    responsiveClass: true,
    responsive: {
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 4,
        nav: false,
      },
      1600: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
  
  var owl = $("#owlTwo");
  owl.owlCarousel({
    autoplay: true,
    rewind: true /* use rewind if you don't want loop */,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
  
      600: {
        items: 1,
      },
  
      1024: {
        items: 1,
      },
  
      1366: {
        items: 1,
      },
    },
  })