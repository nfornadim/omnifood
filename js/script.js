$(document).ready(function() {


  //For sticky navigation
  $(".js--section-features").waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("navigation__sticky");
    } else {
      $("nav").removeClass("navigation__sticky");
    }
  }, {
    offset: "60px;"
    //to run this function 60px before features section.
  });

  //--------------------------------------------------------------------------------
  //Adding smooth scroll 
  $(".js--scroll-to-plans").click(function() {
    //Animate smooth scroll
    $("html, body").animate({ 
      scrollTop: $(".js--section-plan").offset().top
    }, 1000);
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate({ 
      scrollTop: $(".js--section-features").offset().top
    }, 1000);
  });

  //--------------------------------------------------------------------------------
  
  // Add smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
  });

  
  //Animation on Scroll
  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("fadeIn");
  }, {
    offset: "50%;"
  });

  $(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("fadeInUp");
  }, {
    offset: "60%;"
  });

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("fadeIn");
  }, {
    offset: "50%;"
  });

  $(".js--wp-4").waypoint(function(direction) {
    $(".js--wp-4").addClass("fadeIn");
  }, {
    offset: "50%;"
  });

  //For mobile navigation
  $(".js--mini-nav-icon").click(function() {

    var nav = $(".js--mini-nav");
    var icon = $(".js--mini-nav-icon");

    nav.slideToggle(300);

    if (icon.hasClass("ion-ios-menu")) {
      icon.addClass("ion-ios-close");
      icon.removeClass("ion-ios-menu");
    } else {
      icon.addClass("ion-ios-menu");
      icon.removeClass("ion-ios-close");
    }
});





});