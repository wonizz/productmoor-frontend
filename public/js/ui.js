$(function(){
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
    var $progressBarLabel = $('.detail-dealer .slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400
    });  
}
// slick filter
function slickFilter() {
   
    $('.menu-moor').slick({
        slideToShow: 9,
        infinite: false,
        variableWidth: true
    })
}

function goTop(){
    if(window.clickBlock) return false;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    width < 500 ? $('html div').scrollTop(0) : $('html, body').scrollTop(0);
}

function activeMenu(){
    $('.slick-track > a').click(function(){
        $('.slick-track > a').removeClass('active');
        $(this).addClass('active')
    });
}