import { form, passwordInput, arrPasswordInput, showPassword, arrShowPass, errorSecond, errorFirst } from './module/const.js';

// Змінюємо type з password на text
const changeTypePassword = () => {
    arrPasswordInput.forEach(element => {
        if (element.getAttribute('type') === 'password') {
            element.setAttribute('type', 'text');
        } else {
            element.setAttribute('type', 'password');
        }
    });
};

// Змінюємо іконку
const changeShowIcon = () => {
    arrShowPass.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else if (element.classList.contains('fa-eye-slash')) {
            element.classList.add('active');
        }
    });
};

form.addEventListener('click', function (event) {
    if (event.target.closest('.icon-password')) {
        changeTypePassword();

        changeShowIcon();
    }
});

// Отримуємо значення з форми
const getFormValue = () => {
    const value = new FormData(form);
    return {
        mainPassword: value.get('password'),
        secondPassword: value.get('second-password'),
    };
};

// Отримуємо довжину інпута
const valueLength = () => {
    if (getFormValue()?.mainPassword.length < 6 && getFormValue()?.secondPassword.length < 6) {
        errorFirst.classList.add('active');
    } else {
        errorFirst.classList.remove('active');
    }
    return getFormValue()?.mainPassword.length < 6 || getFormValue()?.secondPassword.length < 6;
};

// Порівнюємо значення інпута
const result = () => {
    if (getFormValue()?.mainPassword === getFormValue()?.secondPassword) {
        alert('You are welcome');
        errorSecond.classList.remove('active');
    } else {
        errorSecond.classList.add('active');
    }
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const invalit = valueLength();
    if (!invalit) {
        result();
    } else {
        valueLength();
    }
});
