$(document).ready(function () {
  $("#main-banner").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#categoryProducts").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $("#bestSeller").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".owl-next span").html("<i class='fas fa-chevron-right'></i>");
  $(".owl-prev span").html("<i class='fas fa-chevron-left'></i>");

  // Count Down Timer
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    // Set the countdown for 3 days from the current date
    const today = new Date(),
      countdownDate = new Date(today.getTime() + 3 * day),
      countDown = countdownDate.getTime();

    const x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      // do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
  })();
});
