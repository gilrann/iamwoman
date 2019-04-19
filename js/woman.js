$(document).ready(function() {
  $('.slider__list--collection').slick({
    infinite: false
  });


  if (document.documentElement.clientWidth < 764) {
      $('.slider__list--whats-new').slick({
        arrow: true
      });

      $('.slider__list--blog').slick({
        dots: true
        });
        var $status = $('.blog__switch');
        var $slickElement = $('.slider');
        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
              var i = (currentSlide ? currentSlide : 0) + 1;
              $status.text(i + '/' + slick.slideCount);
          });
  } else if (document.documentElement.clientWidth >= 764 && document.documentElement.clientWidth < 1440) {
    var $status = $('.blog__switch');
    var $slickElement = $('.slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 2;
          $status.text('0'+ i + '/' + slick.slideCount);
      });
    $('.slider__list--blog').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      customPaging : function(slider, i) {
          var thumb = $(slider.$slides[i]).data();
          // return '<a>'+i+'</a>';
      }
    });
    } else {
    $('.slider__list--blog').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 2,
      speed: 500,
      variableWidth: false,
      });
      $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log('beforeChange', currentSlide, nextSlide);
      });
      $('.center').on('afterChange', function(event, slick, currentSlide){
      console.log('afterChange', currentSlide);
      });
      }






  $('.page-header__menu').click(function(event) {
    // event.preventDefault();
    // console.log("что это");

    $('.catalog__wrapper--main')
      .css('display', 'block')
      .animate({
        opacity: 1,
      }, 1600);

    });


  $('.catalog__close').click(function() {
    $('.catalog__wrapper--main')
      .animate({
          opacity: 0
        }, 600,
        function() {
          $('.catalog__wrapper--main')
            .css('display', 'none');
        }
      );
  });


});


function findForm()
{
   document.getElementById('catalog-find-form').submit();
}

function emailForm()
{
   document.getElementById('catalog-email-send').submit();
}
