const button = document.querySelector('.changs-color-on-page');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'gray') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'gray');
    }
    addThemeForBody();
});

function addThemeForBody() {
    if (localStorage.getItem('theme') === 'gray') {
        body.classList.add('body-gray');
    } else {
        body.classList.remove('body-gray');
    }
}

addThemeForBody();

// const button = document.querySelector('.changs-color-on-page');
// const logo = document.querySelector('.header');
// const wrapp = document.querySelector('.wrapper');
// const input = document.querySelectorAll('.input');

// button.addEventListener('click', function (event) {
//     if (!logo.getAttribute('style')) {
//         logo.style.color = 'gray';
//         wrapp.style.backgroundColor = 'gray';
//         input.forEach(element => {
//             element.style.backgroundColor = 'gray';
//         });

//         localStorage.setItem('color', 'gray');
//     }
// else if (logo.getAttribute('style')) {
//         logo.removeAttribute('style');
//         wrapp.removeAttribute('style');
//         input.forEach(element => {
//             element.removeAttribute('style');
//         });

//         localStorage.clear();
//     }
// });

// if (localStorage.getItem('color') === 'gray') {
//     logo.style.color = 'gray';
//     wrapp.style.backgroundColor = 'gray';
//     input.forEach(element => {
//         element.style.backgroundColor = 'gray';
//     });
// }
