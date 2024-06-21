$(function () {

  window.onscroll = function showHeader() {
    var header__top = document.querySelector(".header__top");
    if (window.pageYOffset > 0) {
      header__top.classList.add("header__top--fixed");
    } else {
      header__top.classList.remove("header__top--fixed");
    }
  };

  $('.reviews__slider').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg class="reviews__icon reviews__icon--left"><usexlink:href="images/sprite.svg#icon-prev.svg"></use></svg></button>',
    nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg class="reviews__icon reviews__icon--right"><usexlink:href="images/sprite.svg#icon-next.svg"></use></svg></button>',
    appendArrows: '.reviews__wrap'
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.restaurants__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      });
    } else {
      $(".restaurants__list.slick-initialized").slick("unslick");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu__btn');
  const mobileMenu = document.querySelector('.menu-mobile');
  const bodyLock = document.querySelector('body');
  const burgerClose = document.querySelector('.menu-mobile__btn');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mobile--active');
    if (mobileMenu.classList.contains('menu-mobile--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      bodyLock.classList.remove('lock');
    }
  });

  burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-mobile--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('menu-mobile--active');
      bodyLock.classList.remove('lock');
    }
  });

});





var mixer = mixitup('.assortment__list');