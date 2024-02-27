const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav--active');
  menuBtn.classList.toggle('header__menu-button--opened');
  menuBtn.classList.toggle('header__menu-button--close');
});
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    menu.classList.remove('nav--active');
    menuBtn.classList.remove('header__menu-button--opened');
  }
});
