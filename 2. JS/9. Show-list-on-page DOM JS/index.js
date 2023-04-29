//1. Опишіть, як можна створити новий HTML тег на сторінці?
// Створити HTML тег можна за допомогою метода createElement(). const elem = document.createElement('div');
// Таким чином ми через JS можемо створити будь-який тег.
// І також є метод createTextNode(). Він створює новий вузол (наприклад можна створити якийсь рядок) const ex = document.createTextNode('Text');

//2. Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра?
// insertAdjacentHTML(перший параметр, другий параметр)
// Перший параметр - куди вставляти елемент.
// Другий параметр - що саме вставляємо.
// Куди вставляти:
// * beforebegin - вставляє перед обʼєктом.
// * afterend - вставляє після обʼєкта.
// * afterbegin - вставляє всередину, на початок обʼєкта.
// * beforeend - вставляє всередину, в кінець обʼєкта.

//3. Як можна видалити елемент зі сторінки?
// Видалити елемент зі сторінки можна за допомогою метода remove()
// const elem = document.querySelector('.span');
// elem.remove();

// Звичайний масив
const arr = ['Kharkiv', 'Kiev', 'Odessa', 'Lviv', 'Dnieper'];

const getArr = (arr, parent = document.body) => {
    const list = document.createElement('ul');
    parent.prepend(list);

    arr.forEach(element => {
        const item = document.createElement('li');
        item.innerHTML = element;
        list.prepend(item);
    });
};

getArr(arr);

// Масив масивів
const arr2 = ['Kharkiv', 'Kiev', ['Kovel', ['Kiev'], 'Lutsk'], 'Odessa', 'Lviv', 'Dnieper'];

const getArr2 = (arr, parent = document.body) => {
    const list = document.createElement('ul');
    arr.forEach(element => {
        const item = document.createElement('li');
        if (Array.isArray(element)) {
            getArr2(element, item);
        } else {
            item.innerHTML = element;
        }
        list.prepend(item);
    });
    parent.prepend(list);
};

getArr2(arr2);
