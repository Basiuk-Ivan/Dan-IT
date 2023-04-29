# Завдання

Створити новий React додаток з двома модальними вікнами.

## Технічні вимоги:

-   Створити програму за допомогою create-react-app.
-   Створити на головній сторінці 2 кнопки з текстом Open first modal та Open second modal.
-   По кліку на кожну з кнопок має відкриватись відповідне модальне вікно.
-   Створити компонент Button який повинен мати такі властивості, що передаються з батьківського компонента:
-   Колір фону (властивість backgroundColor)
-   Текст (властивість text)
    Функція при натисканні (властивість onClick)
-   Створити компонент Modal який повинен мати такі властивості, що передаються з батьківського компонента:
    Т- екст заголовка модального вікна (властивість header)
    Ч- и повинен бути хрестик для закриття вікна праворуч вгорі (boolean властивість closeButton, значення true/false)
-   Основний текст модального вікна, який буде показаний у його центральній частині (властивість text)
-   Кнопки, що знаходяться у нижній частині модального вікна, передані у вигляді коду у форматі JSX (властивість actions)
-   При відкритому модальному вікні частина сторінки, що залишилася, повинна бути затемнена за допомогою темного напівпрозорого фону.
-   Модальне вікно має закриватися при натисканні області зовні його контенту.
-   Стилізувати кнопки та модальні вікна за допомогою SCSS
-   Кнопки мають бути різних кольорів
-   Модальні вікна мають містити різний текст.
-   Дизайн модального вікна дається в PSD файлі.
-   Одне модальне вікно зробити як у дизайні. Для другого потрібно використовувати інший текст та інші кнопки (виберіть будь-які).
-   Усі компоненти мають бути створені у вигляді ES6 класів.

### Необов'язкове завдання підвищеної складності

    Замість SCSS стилізувати компоненти за допомогою JSS або Styled Components

## Getting Started with Create React App

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
