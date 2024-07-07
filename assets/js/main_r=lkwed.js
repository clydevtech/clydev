(function ($) {
  "use strict";

  // Spinner
  $(document).ready(function () {
    var spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();
  });

  // Parallaxmouse js
    
    function parallaxMouse() {
      if ($('#parallax').length) {
          var scene = document.getElementById('parallax');
          var parallax = new Parallax(scene);
      };
  };
  parallaxMouse();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow");
      } else {
        $(".fixed-top").removeClass("bg-white shadow");
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-white shadow").css("top", -45);
      } else {
        $(".fixed-top").removeClass("bg-white shadow").css("top", 0);
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  //Smooth scrolling with links
  $(".smoothScroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 800);
  });

  // Smooth scrolling when the document is loaded and ready

  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    autoplay: true,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });

  // contact form loader
  // $("#contact-form").on("submit", (e) => {
  //   $("#form-submit").html(
  //     `<div class="spinner-border text-light" role="status"></div>`
  //   );
  //   e.preventDefault();
  //   const name = $("#fullName").val();
  //   const email = $("#email").val();
  //   const subject = $("#subject").val();
  //   const message = $("#message").val();
  //   if (email == "" || name == "" || message == "" || subject == "") {
  //     alert("All feilds are required");
  //   } else {
  //     var formData = {
  //       email: email,
  //       name: name,
  //       subject: subject,
  //       message: message,
  //     };
  //     var jsonData = JSON.stringify(formData);

  //     fetch("https://srenterprises.website/send_mail", {
  //       method: "POST",
  //       body: jsonData,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         if (result.success) {
  //           $("#contact-message")
  //             .html(`<div class="alert alert-success my-3" role="alert">
  //             Your message has been sent. We will reply you soon...
  //             </div>`);
  //           $("#contact-form").trigger("reset");
  //           $("#form-submit").html(`Submitted`);
  //         } else {
  //           alert(result.message);
  //           $("#form-submit").html(`Submit Again`);
  //         }
  //       })
  //       .catch((error) => {
  //         alert(`Error: ${error}`);
  //         $("#form-submit").html(`Submit Again`);
  //       });
  //   }
  // });

  $(".nav-toggle").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });
})(jQuery);
