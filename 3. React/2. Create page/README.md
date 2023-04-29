# Завдання

Створити сторінку інтернет-магазину.

Для цього необхідно доповнити проект, створений у попередньому домашньому завданні homework1.

## Технічні вимоги:

-   Створити масив із колекцією товарів інтернет-магазину.

-   Один товар повинен містити такі дані:
-   Назва
-   Ціна
-   Шлях до картинки (url в інтернеті або шлях до файлу в папці public)
-   Артикул (будь-які цифри)
-   Колір – Всього товарів має бути не менше 10. Тематика магазину – будь-яка.

-   Покласти масив у JSON файл, який зберігатиметься в папці public вашого проекту.
-   За допомогою AJAX запиту отримати дані з масиву товарів, записати в локальний state компонента головної сторінки.
-   Вивести на сторінку перелік товарів. Дизайн можна взяти з PSD файлу з секції LATEST ARRIVALS IN MUSICA або будь-який свій. Дизайн може бути будь-який, але він має бути.
-   Картка товару та список товарів обов'язково повинні бути реалізовані як окремі компоненти.
    П- ри натисканні на кнопку Add to cart має з'являтися модальне вікно з підтвердженням додавання товару в кошик використовуйте відповідний компонент з homework1.
-   Також на кожній картці товару має бути іконка зірочки, яка дозволить додати товар до обраного. Якщо товар обраний – зірочка має бути зафарбована будь-яким кольором.
-   При додаванні товару в кошик або у вибране, зберігати відповідну зміну в localStorage.
-   У шапці сайту показувати іконки кошика та обраного, поряд з якими має бути зазначена кількість товарів, які були додані до кошика чи обране.
-   Проект можна стилізувати за допомогою JSS чи SCSS.
-   Усі компоненти мають бути створені у вигляді ES6 класів.
-   Властивості, які передаються у компоненти, повинні бути перевірені за допомогою propTypes.
-   Для всіх властивостей, які не є обов'язковими, необхідно вказати defaultProps.
-   На даний момент у додатку має бути лише одна сторінка – головна сторінка зі списком товарів.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
