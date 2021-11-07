// Responsive Menu
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})
//Form Control