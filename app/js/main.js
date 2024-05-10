$(function () {

  window.onscroll = function showHeader() {
    var header__top = document.querySelector(".header__top");
    if (window.pageYOffset > 0) {
      header__top.classList.add("header__fixed");
    } else {
      header__top.classList.remove("header__fixed");
    }
  };


  $('.reviews__slider').slick({
    dots: true,
    
    prevArrow:'<button type="button" class="reviews__arrow reviews__arrow--prev"><svg class="arrow__left"><usexlink:href="images/sprite.svg#icon-prev.svg"></use></svg></button>',  
    nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg class="arrow__right"><usexlink:href="images/sprite.svg#icon-next.svg"></use></svg></button>', 
    appendArrows: '.arrows-wrap'
        
        
    
  });


});
var mixer = mixitup('.assortment__list');