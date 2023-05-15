// navbar js
  // Add this JavaScript code to toggle the navbar links on section click
  $(document).ready(function() {
    $(".navbar-nav a").on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });
  });


// reviews js 
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    autoPlay: true
  });
});



// let swiper = new Swiper(".video-slider", {
//   spaceBetween: 20,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
// breakpoints: {
//       740: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
// });


// video js 
let swiper = new Swiper('.video-slider', {
  effect: 'slide',
  grabCursor: true,
  // autoplay: {
  //   delay: 5000,
  // },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});