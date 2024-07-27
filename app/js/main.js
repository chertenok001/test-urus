$(function () {
  
  var $range = $(".filters-price__input");
  var $inputFrom = $(".filters-price__from");
  var $inputTo = $(".filters-price__to");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });


  $('.select-column').styler();


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

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.discounts__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      });
    } else {
      $(".discounts__list.slick-initialized").slick("unslick");
    }
  });





  
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.catalogy__btn');
  const mobileMenu = document.querySelector('.catalogy__filters');
  const bodyLock = document.querySelector('body');
  const burgerClose = document.querySelector('.filters-btn__close');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('catalogy__filters--active');
    if (mobileMenu.classList.contains('catalogy__filters--active')) {
      bodyLock.classList.add('close');
    }
    else {
      bodyLock.classList.remove('close');
    }
  });

  burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('catalogy__filters--active');
    bodyLock.classList.remove('close');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('catalogy__filters--active');
      bodyLock.classList.remove('close');
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