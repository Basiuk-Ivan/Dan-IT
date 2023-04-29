// 1. Опишіть своїми словами що таке Document Object Model (DOM)
// Обʼєкта модель документа. DOM - представляє собою все уточення HTML сторінки у вигляді обʼєктів, які можна змінювати. Тобто згідно DOM усі теги в HTML будуть обʼєктами. Дочірні теги - це нащадки батьківського обʼєкта. Текст і коментарі - також будуть обʼєкти. Абсолютно усі ці обʼєкти доступні нам в JS і ми можемо ними керувати. HTML представлений у браузері у вигляді дерева DOM. Теги будуть вузлами обʼєкта. Все що написано в HTML - це частина DOM дерева (навіть коментарі)

// 2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?
// За допомогою innerHTML ми можемо працювати з текстом і вилучати або встановлювати вміст цього тексту у форматі HTML тегів. Тобто передавши якусь частину текста, ми додатково хочемо написати якийсь тег <p></p> з будь-яким класом. І ми можемо вставити цей тег сам як тег, щоб він корректно відображався на сторінці. Тоді як через innerText увесь текст який передається - він є самим звичайним текстом, тобто він не зможе передати ці HTML теги.

// 3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
// Звернутися до елемента на сторінці можна за допомогою querySelector(). Це буде найбіль універсальний спосіб. Він повертає нам перший елемент, який ми у нього попросимо. Також можна знайти елемент за id. Для цього використовуємо getElementById ().Або ще один метод getElementsBy (). Тут можна використати getElementsByTagName() - пошук по імені тега, getElementsByClassName - пошук по імені класа.

// 1. Знайти всі параграфи на сторінці та встановити колір фону #ff0000
const paragraph = document.querySelectorAll('p');
console.log(paragraph);

for (const elem of paragraph) {
    elem.style.backgroundColor = '#ff0000'; // не зрозумів треба color чи backgroundColor (але наче фон, тому зробив через background)
}

// 2. Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.
const elem = document.getElementById('optionsList');
console.log(elem);

const parents = elem.parentNode;
console.log(parents);

const child = elem.childNodes;
console.log(child);

// 3.Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph
const newParagraph = document.getElementById('testParagraph');
newParagraph.innerHTML = `This is a paragraph`;
console.log(newParagraph);

// 4-5. Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.
const main = document.querySelector('.main-header');
const children = main.children;

for (const elem of children) {
    elem.classList.add('nav-item');
}
console.log(children);

// 6. Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.
const section = document.querySelectorAll('.section-title');

section.forEach(element => {
    element.classList.remove('section-title');
});
console.log(section);

// for (const elem of section) {
//     elem.classList.remove('section-title');
// }
// console.log(section);
