$(function(){
    //masonry();
    slickDetail();
    slickFilter();
})

// masonry
function masonry() {
    $('.cont-list, .detail-list').isotope({
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
	$('html').scrollTop(0);
	// scrollTop 메서드에 0 을 넣어서 실행하면 끝 !!
	// 간혹 이 소스가 동작하지 않는다면
	// $('html, body') 로 해보세요~
}