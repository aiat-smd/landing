// Burger menu 
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // services hide and show
  let show1 = $('.show-1');
  let show2 = $('.show-2');
  let show3 = $('.show-3');
  let show4 = $('.show-4');
  let show5 = $('.show-5');

  show1.click(function(event) {
    $('.hide-1, .up-1, .bold-1').toggleClass('show');
  });
  show2.click(function(event) {
    $('.hide-2, .up-2, .bold-2').toggleClass('show');
  });
  show3.click(function(event) {
    $('.hide-3, .up-3, .bold-3').toggleClass('show');
  });
  show4.click(function(event) {
    $('.hide-4, .up-4, .bold-4').toggleClass('show');
  });
  show5.click(function(event) {
    $('.hide-5, .up-5, .bold-5').toggleClass('show');
  });

  // slick slider

  $('.slider__list').slick({
    arrow: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

