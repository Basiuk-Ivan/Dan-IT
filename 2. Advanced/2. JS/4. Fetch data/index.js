/* 
Поясніть своїми словами, що таке AJAX і чим він корисний при розробці Javascript?

Asynchronous JavaScript And XML
AJAX - це технологія, яка дозволяє відправляти та отримувати дані з сервера без перезавантаження сторінки.
При використані AJAX можна не оновлювати веб-сторінку, а змінити її потрібну частину отримавши дані від сервера у фоному режимі.
*/

const root = document.querySelector('.content');
const loader = document.querySelector('.lds-roller');

const url = 'https://ajax.test-danit.com/api/swapi/films';
const getFilms = fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(film => {
            loader.style.display = 'inline-block';

            const filmName = document.createElement('div');
            const filmId = document.createElement('div');
            const filmDesc = document.createElement('div');
            const person = document.createElement('ul');

            filmName.textContent = `Назва фільму: ${film?.name}`;
            filmId.textContent = `Номер епізоду: ${film?.episodeId}`;
            filmDesc.textContent = ` Опис: ${film?.openingCrawl}`;
            person.textContent = `Персонажі:`;

            root.append(filmName);
            root.append(filmId);
            root.append(filmDesc);
            root.append(person);
            person.style.marginBottom = '10px';

            if (!!getFilms) {
                loader.style.display = 'none';
            }

            film.characters.forEach(link => {
                const li = document.createElement('li');
                fetch(link)
                    .then(response => response.json())
                    .then(characters => {
                        const personCharacters = characters?.name;
                        li.append(personCharacters);
                        person.append(li);
                    });
            });
        });
    });
