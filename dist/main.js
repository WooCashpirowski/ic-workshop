// Site fade in

const main = document.querySelector(".main");

function initMain() {
  main.style.display = "block";
  setTimeout(() => (main.style.opacity = 1), 100);
}

initMain();

// Smooth scrolling

$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Back to top button

if ($("#back-to-top").length) {
  var scrollTrigger = 100,
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    };
  backToTop();
  $(window).on("scroll", function() {
    backToTop();
  });
  $("#back-to-top").on("click", function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      700
    );
  });
}
