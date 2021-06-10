var menu = document.querySelector('.navigation__menu');
var nav = document.querySelector('.navigation__list');

nav.classList.add('navigation__list--closed');

menu.addEventListener('click', function() {
    if (nav.classList.contains('navigation__list--closed')) {
    nav.classList.remove('navigation__list--closed');
    nav.classList.add('navigation__list--opened');
  } else {
    nav.classList.remove('navigation__list--opened');
    nav.classList.add('navigation__list--closed');
  }
});
