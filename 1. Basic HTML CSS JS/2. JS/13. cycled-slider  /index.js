/* 
1. Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
setTimeout - дозволяє нам запускати функцію **один раз** через певний період часу.
setInterval - дозволяє нам запускати функцію **багаторазово**, починаючи через певний інтервал часу, а потім постійно повторювати в цьому інтервалі.
Приклад:
function showNumber(a, b) {
    console.log(a + b);
}
setTimeout(showNumber, 2000, 4, 5); // покаже цифру 9 - один раз через 2 сек.
// ------------------------------------ //
function showNumber(a, b) {
    console.log(a + b);
}
setInterval(showNumber, 1000, 4, 5); // кожну секунду буде показувати цифру 9

2. Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
Функція setTimeout() буде викликана лише після завершення виконання поточного скрипта.
Наприклад, спочатку буде виведено “Привіт”, а потім відразу “Як справи?”:
setTimeout(() => console.log('Як справи?'));
console.log('Привіт');

3. Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
Тому що, коли функція передається у setInterval/setTimeout, до неї створюється внутрішнє посилання та зберігається у планувальнику.
Також функція посилається на змінні, тому, поки setInterval/setTimeout існують, зовнішні змінні також існують. 
Ці змінні можуть займати якусь частину пам’яті, можливо навіть більше ніж сама функція.
Тому, коли нам більше не потрібна запланована функція, краще її скасувати.
*/

const timer = document.querySelector('#timer1');
const images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];
const buttonOff = document.querySelector('.button-off');
const buttonOn = document.querySelector('.button-on');

let index = 0;
let sec = 3;
let mlSec = 99;

const mainTimer = () => {
    const interval = setInterval(() => {
        document.getElementById('img_main').src = images[index];
        timer.innerText = `Таймер: ${sec}:${mlSec} сек`;
        if (mlSec === 0) {
            sec--;
            mlSec = 99;
        }
        if (sec === 0) {
            sec = 3;
            index++;
        }
        if (index == images.length) {
            index = 0;
        }

        buttonOff.addEventListener('click', function (event) {
            if (event.target) {
                clearTimeout(interval);
            }
        });
        mlSec--;
    }, 10);
};
mainTimer();

buttonOn.addEventListener('click', function (event) {
    if (event.target) {
        mainTimer();
    }
});
