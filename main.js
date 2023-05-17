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

// play button 

 // Get the play/pause button and video element for the first video
  var playButton1 = document.getElementById("playButton1");
  var video1 = document.getElementById("myVideo1");

  // Add event listener to the play/pause button
  playButton1.addEventListener("click", function() {
      if (video1.paused) {
          video1.play();
          playButton1.innerHTML = "&#x23F8;"; // Pause button icon
      } else {
          video1.pause();
          playButton1.innerHTML = "&#x25BA;"; // Play button icon
      }
  });

  // Get the play/pause button and video element for the second video
  var playButton2 = document.getElementById("playButton2");
  var video2 = document.getElementById("myVideo2");

  // Add event listener to the play/pause button
  playButton2.addEventListener("click", function() {
      if (video2.paused) {
          video2.play();
          playButton2.innerHTML = "&#x23F8;"; // Pause button icon
      } else {
          video2.pause();
          playButton2.innerHTML = "&#x25BA;"; // Play button icon
      }
  });

  // Get the play/pause button and video element for the third video
  var playButton3 = document.getElementById("playButton3");
  var video3 = document.getElementById("myVideo3");

  // Add event listener to the play/pause button
  playButton3.addEventListener("click", function() {
      if (video3.paused) {
          video3.play();
          playButton3.innerHTML = "&#x23F8;"; // Pause button icon
      } else {
          video3.pause();
          playButton3.innerHTML = "&#x25BA;"; // Play button icon
      }
  });
