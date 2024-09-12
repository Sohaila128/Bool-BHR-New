$(document).ready(function(){
  var slider = $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
  });

});

    //===== Slick MOST SELLING
    $('.popular-slide').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      ]
  });
