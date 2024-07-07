$(document).ready(function () {
  $(".client-testimonial-carousel").owlCarousel({
    items: 3,
    autoplay: true,
    margin: 30,
    loop: true,
    dots: true,
    smartSpeed: 600,
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
    //      nav:true,
    //      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
  });
});
