$(function(){
    //masonry();
    slickDetail();
    slickFilter();
})

$(window).load(function() {
    console.log("console> window.onloade() 첫번째");
    //masonry();
});


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