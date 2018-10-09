
// collapsing menu after clicking on link
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  // Smooth scrolling
  var $scrollLink = $('.scroll');
  $scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 66
    }, 500 );
  });

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
      $scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
      }
    })
  });
});
