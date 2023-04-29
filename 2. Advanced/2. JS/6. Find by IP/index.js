/* 
Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript?

Асинхронність у JavaScript дозволяє програмі не блокуватись під час запиту до сервера або завантаження файлів. Замість очікування того, що колись операція завершиться, програма виконується далі, а коли операція все-таки буде завершена, викликається певна функція з результатами. Це дає нам можливість більш ефективно використати час, оскільки програма не очікує на завершення операцій, а виконується далі. 
*/

const button = document.querySelector('.get-ip-button');
const app = document.querySelector('.app');

button.addEventListener('click', async e => {
    const requestIP = await fetch('https://api.ipify.org/?format=json');
    const jsonIp = await requestIP.json();

    const apiUrl = await fetch(`http://ip-api.com/json/${jsonIp.ip}?fields=status,message,country,regionName,city,district,timezone`);
    const jsonGetData = await apiUrl.json();

    app.innerText = `TimeZone: ${jsonGetData?.timezone},
    Country: ${jsonGetData?.country},
    City: ${jsonGetData?.city},
    Region: ${jsonGetData?.regionName},
    Districk: ${jsonGetData?.district}`;
});
