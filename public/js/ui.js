$(function(){
    masonry();
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
    $('.detail-dealer .swiper-wrapper').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        variableWidth: true
    })
}
// slick filter
function slickFilter() {
   
    $('.menu-moor').slick({
        slideToShow: 9,
        infinite: false,
        variableWidth: true
    })
}