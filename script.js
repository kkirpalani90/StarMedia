$(document).ready(function(){
  $('.content-slider').slick({
  infinite: true,
  speed: 200,
  fade: true,
  slidesToShow: 1,
  autoplay: true, 
  autoplaySpeed: 3500,
  nextArrow:$('.next'), 
  prevArrow:$('.prev')
  });
  
$('.stream-list').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 200,
  arrow: true,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2, 
        infinite: true,
        arrow: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

});



/* window.onbeforeunload = function () { window.scrollTo(0,0); }; */