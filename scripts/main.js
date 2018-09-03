if (window.matchMedia("(min-width: 813px)").matches) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function(x) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  }
}



// collapsing menu after clicking on link
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
