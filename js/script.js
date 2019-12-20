$(document).ready(function () {
  $('.slider__wrapper').slick({
    //nav
    dots: false,
    arrows: false,
    //auto play
    autoplay: true,
    autoplaySpeed: 2500,
    //fade effect
    fade: true,
    speed: 800,
    cssEase: 'linear'
  });
});

let menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
let menuClose = document.querySelector('.menu-close');
let menuBtn = document.querySelector('.menu');
menuBtn.onclick = () => {
  if (menuBtn.innerHTML == 'menu') {
    menuBtn.innerHTML = 'close';
    menuClose.style.display = 'block';
    menuWrapper.style.top = '40px';
  } else {
    menuBtn.innerHTML = 'menu';
    menuWrapper.style.top = '-100%';
    menuClose.style.display = 'none';
  }
}

menuClose.onclick = () => {
  menuBtn.innerHTML = 'menu';
  menuWrapper.style.top = '-100%';
  menuClose.style.display = 'none';
}