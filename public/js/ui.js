$(function () {
  //masonry();
  slickDetail();
  slickFilter();
  activeMenu();
})

// masonry
function masonry() {
  $('.detail-list').isotope({
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 1,
      horizontalOrder: false
    }
  });
}

// slick Detail
function slickDetail() {
  var $slider = $('.detail-dealer .swiper-wrapper').not('.slick-initialized');
  var $progressBar = $('.detail-dealer .progress');
  var $progressBarLabel = $('.detail-dealer .slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 3)) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
  });

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 600,
    touchMove: false,
    swipe: true
  });
}
// slick filter
function slickFilter() {
  if($('.slick-next').length == 0){
    $('.menu-moor').not('.slick-initialized').slick({
      slideToShow: 9,
      slidesToScroll: 3,
      infinite: false,
      variableWidth: true
    })
  }
  
}

function goTop() {
  if (window.clickBlock) return false;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  width < 500 ? $('html div').scrollTop(0) : $('html div.detail-inner').animate({ scrollTop: 0 }, 400);;
}

function activeMenu() {
  $('a.swiper-slide').click(function () {
    $('a.swiper-slide').removeClass('active');
    $(this).addClass('active')
  });
}

function searchAction() {
  $('.txt-addon').length > 0 || $('.txt-nodata').length > 0 ? $('#serchMoor').val('') : ""
  $('.txt-addon').length > 0 ? $('a.swiper-slide').removeClass('active') : ""
  $('a.swiper-slide').each(function () {
    this.text == window.category ? $(this).addClass('active') : ""
  });
}

function bodyScrollLock() {
  $('html > body').css({'overflow': 'hidden', 'height': '100%'});
}

function bodyScrollUnlock() {
  $('html > body').removeAttr('style')
}
