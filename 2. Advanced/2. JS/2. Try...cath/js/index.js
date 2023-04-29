/* 
Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch?

Один із прикладів, коли на наш запит від сервера приходять не всі дані, які ми запросили і для, щоб наш код не поламався від цього ми можемо застосувати try...catch. Тобто навіть при виявленні якоїсь помилки, програма буде далі працювати. 
Також, коли користувач наприклад заповнює якусь форму або вводить дані, і він робить це не коректно, ми можемо сповістити його. Типу ти вводиш не коректні дані, обнови сторінку. Якщо ж він і далі вводить ці дані некоректно і відправляє їх, то для того, щоб наш додаток не "полетів" і міг працювати далі, ми тут також можемо застосувати try...catch.

*/

import { wrapper, ul, books } from './variables.js';

// wrapper.prepend(ul);

// books.forEach(elemObj => {
//     console.log(elemObj);
//     try {
//         if (elemObj?.author && elemObj?.name && elemObj?.price) {
//             const li = document.createElement('li');
//             ul.prepend(li);

//             for (const entriesArr of Object.entries(elemObj)) {
//                 console.log(entriesArr);
//                 const string = entriesArr.join(': ');
//                 li.prepend(string, ', ');
//             }
//         } else {
//             if (!elemObj?.author) {
//                 throw Error(`${author} is not a found`);
//             } else if (!elemObj?.name) {
//                 throw Error(`${name} is not a found`);
//             } else if (!elemObj?.price) {
//                 throw Error(`${price} is not a found`);
//             }
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

wrapper.prepend(ul);

books.forEach(elemObj => {
    console.log(elemObj);
    try {
        if (elemObj?.author && elemObj?.name && elemObj?.price) {
            const li = document.createElement('li');
            const entriesArr = Object.entries(elemObj);

            ul.prepend(li);
            li.prepend(entriesArr);
        } else {
            if (!elemObj?.author) {
                throw Error(`${author} is not a found`);
            } else if (!elemObj?.name) {
                throw Error(`${name} is not a found`);
            } else if (!elemObj?.price) {
                throw Error(`${price} is not a found`);
            }
        }
    } catch (err) {
        console.log(err);
    }
});
