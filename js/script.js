// Preloader
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =============================
            Team
============================= */ 
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true, 
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});


/* =============================
         Progress Bars
============================= */ 
$(function () {
   $("#progress-elements").waypoint(function() {
    $(".progress-bar").each(function() {
      $(this).animate({width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
    });
      this.destroy();
   }, { offset: 'bottom-in-view' 
  });
});


/* =============================
       Responsive Tabs
============================= */ 
$('#services-tabs').responsiveTabs({
  animation: 'slide'
});

/* =============================
          Portfolio
============================= */ 
$(window).on('load', function () {
  // Initialize Isotope
  $(".isotope-container").isotope({
  });

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {
    // get filter value
    const filterValue = $(this).attr('data-filter');
      // filter  portfolio
      $(".isotope-container").isotope({
        filter: filterValue
      });

      // active button 
      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
  });
});

/* =============================
          Magnifier
============================= */ 
$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
      enabled: true 
    }
  });
});

/* =============================
          Testimonial
============================= */ 
$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true, 
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});

/* =============================
           Counter
============================= */ 
$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
});

/* =============================
          Clients
============================= */
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true, 
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});

/* =============================
          Navigation
============================= */
// Show & Hide White Navigation
$(function () {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function(){
     // show/hide nav on window's scroll
    showHideNav();
  });


  function showHideNav() {
    if($(window).scrollTop() > 50) {
      // Show white navigation bar
      $("nav").addClass("white-nav-top");

      // Show dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      // Show back to top button
      $("#back-to-top").fadeIn();

    } else {
       // Hide white navigation bar
      $("nav").removeClass("white-nav-top");

        // Show logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function () {
  $("a.smooth-scroll").on('click', function (e) {
    e.preventDefault();

    // Get section id like #about, #services, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250);
  });
})

/* =============================
          Mobile Menu
============================= */
$(function () {
  // Show Mobile View
  $("#mobile-nav-open-btn").on("click", function () {
    $(".mobile-nav").css("height", "100%");
  });

  $("#mobile-nav-close-btn, .navbar-nav a").on("click", function () {
    $(".mobile-nav").css("height", "0%");
  });

});


/* =============================
          Animation
============================= */
// Animate on Scroll
$(function () {

    new WOW().init()

});

// home animation on page load
$(window).on('load', function () {
$("#home-heading-1").addClass("animate__animated animate__fadeInDown");
$("#home-heading-2").addClass("animate__animated animate__fadeInLeft");
$("#home-text").addClass("animate__animated animate__zoomIn");
$("#home-btn").addClass("animate__animated animate__zoomIn");
$("#arrow-down i").addClass("animate__animated animate__infinite animate__fadeInDown");
});
