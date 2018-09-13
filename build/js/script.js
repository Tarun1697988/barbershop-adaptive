var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})

var advantage = document.querySelector(".advantages");
var advantageItems = advantage.querySelectorAll(".advantages__item");
var advantageToggle = document.querySelector(".advantages__toggles");
var advantageToggles = advantageToggle.querySelectorAll(".slider__toggle");




advantageToggles[0].addEventListener('click', function () {

  for (i = 0; i < 3; i++) {
    advantageItems[i].classList.remove('advantages__item--active');
    advantageToggles[i].classList.remove('slider__toggle--active');
  };
  advantageItems[0].classList.add('advantages__item--active');
  advantageToggles[0].classList.add('slider__toggle--active');
});
advantageToggles[1].addEventListener('click', function () {

  for (i = 0; i < 3; i++) {
    advantageItems[i].classList.remove("advantages__item--active");
    advantageToggles[i].classList.remove("slider__toggle--active");
  }
  advantageItems[1].classList.add("advantages__item--active");
  advantageToggles[1].classList.add("slider__toggle--active");
});
advantageToggles[2].addEventListener('click', function () {
  for (i = 0; i < 3; i++) {
    advantageItems[i].classList.remove("advantages__item--active");
    advantageToggles[i].classList.remove("slider__toggle--active");
  }

  advantageItems[2].classList.add("advantages__item--active");
  advantageToggles[2].classList.add("slider__toggle--active");
});