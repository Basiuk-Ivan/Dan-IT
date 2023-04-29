import { animItems, animeElement } from './anime-element.js';

const btnBurger = document.querySelector('.menu__burger');
const btnBurgerArr = document.querySelectorAll('.header-icon');
const menuList = document.querySelector('.menu__nav-bar');

document.addEventListener('click', menu);

function menu(event) {
    if (event.target.closest('.menu__burger')) {
        menuList.classList.toggle('active');
        btnBurger.classList.toggle('active');
    }
    if (!event.target.closest('.menu__burger') & !event.target.closest('.menu__list')) {
        menuList.classList.remove('active');
        btnBurger.classList.remove('active');
    }
}
