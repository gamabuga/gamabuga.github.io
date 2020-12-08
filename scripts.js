const menuButton = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.icon');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
  navList.classList.toggle('nav-list-change');

  // changing hamburger to X and vice-versa
  menuIcon.classList.toggle('ion-md-menu');
  menuIcon.classList.toggle('ion-md-close');
});
