const form = document.querySelector('.password-form');
const passwordInput = document.querySelectorAll('[type=password]');
const arrPasswordInput = [...passwordInput];
const showPassword = document.querySelectorAll('.icon-password');
const arrShowPass = [...showPassword];
const errorSecond = document.querySelector('.error-second');
const errorFirst = document.querySelector('.error-first');

export { form, passwordInput, arrPasswordInput, showPassword, arrShowPass, errorSecond, errorFirst };
