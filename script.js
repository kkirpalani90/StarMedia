$(document).ready(function () {
  $(".content-slider").slick({
    infinite: true,
    speed: 200,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });
});

$(document).ready(function () {
  $("#latest-track").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow: $("#latest-next-arrow"),
    prevArrow: $("#latest-prev-arrow"),
    // arrow: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#trending-track").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow: $("#trending-next-arrow"),
    prevArrow: $("#trending-prev-arrow"),
    // arrow: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#kDrama-track").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow: $("#kDrama-next-arrow"),
    prevArrow: $("#kDrama-prev-arrow"),
    // arrow: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#anime-track").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow: $("#anime-next-arrow"),
    prevArrow: $("#anime-prev-arrow"),
    // arrow: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          /* arrow: true */
          arrow: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/* window.onbeforeunload = function () { window.scrollTo(0,0); }; */
