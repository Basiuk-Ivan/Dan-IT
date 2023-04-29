const btnBurger = document.querySelector('.header__burger-btn');
const btnBurgerArr = document.querySelectorAll('.header-icon');
const menuList = document.querySelector('.menu__list');

btnBurger.addEventListener('click', function (event) {
    menuList.classList.toggle('menu__list-active');
    changeShowIcon();
});

const changeShowIcon = () => {
    btnBurgerArr.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else if (element.classList.contains('icon-line')) {
            element.classList.add('active');
        } else if (element.classList.contains('icon-burger')) {
            element.classList.add('active');
        }
    });
};
