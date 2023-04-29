import { Card } from './Card.js';
import { createPost } from './createPost.js';

const app = document.querySelector('.app');
const loader = document.querySelector('.loader');

const getData = async () => {
    const urlUsers = await fetch('https://ajax.test-danit.com/api/json/users');
    const urlPosts = await fetch('https://ajax.test-danit.com/api/json/posts');

    const jsonUsers = await urlUsers.json();
    const jsonPosts = await urlPosts.json();

    jsonUsers.forEach(user => {
        const postFilter = jsonPosts.filter(post => {
            return user.id === post.userId;
        });

        postFilter.forEach(post => {
            if (!!jsonUsers && !!jsonPosts) {
                loader.style.display = 'none';
            }

            const cardPost = new Card(post.title, post.body, user.name, user.email, post.id);

            app.insertAdjacentHTML('afterbegin', createPost(cardPost.title, cardPost.body, cardPost.name, cardPost.email, cardPost.id));

            const buttonDelete = document.querySelector('.buttons__delete');
            const cardWithHtml = document.querySelector('.card');

            buttonDelete.addEventListener('click', async e => {
                const urlDeleteRequest = await fetch(`https://ajax.test-danit.com/api/json/posts/${cardWithHtml.id}`, {
                    method: 'DELETE',
                });

                if (urlDeleteRequest.ok && e.target.getAttribute('id') === cardWithHtml.getAttribute('id')) {
                    cardWithHtml.remove();
                } else {
                    alert('Помилка HTTP:' + urlDeleteRequest.status);
                }
            });
        });
    });
};

getData();
