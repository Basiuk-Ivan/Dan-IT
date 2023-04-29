/* 1. Чому для роботи з input не рекомендується використовувати клавіатуру?

Тому що на сучасних пристроях є інші способи "введення". Наприклад, користувач можна використати ввід тексту через клавітатуру на екрані, ввід тексту голосом або копіювати/вставити за допомогою миші.
Тому для того, щоб відстежувати введення даних у поле <input> - подій клавіатури недостатньо. 
Для цього також використовують такі події як: change, cut/copy/paste, input.
*/

const btn = document.querySelectorAll('.btn');

document.addEventListener('keydown', function (event) {
    btn.forEach(element => {
        if (event.key.toUpperCase() === element.innerText.toUpperCase()) {
            element.classList.toggle('blue');
        } else {
            element.classList.remove('blue');
        }
    });
});
