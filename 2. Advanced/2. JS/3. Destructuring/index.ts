/*
Поясніть своїми словами, як ви розумієте, що таке деструктуризація і навіщо вона потрібна?
Деструктуризація - це синтаксис присвоювання, при якому можна для обʼєкта або масива присвоїти декілька змінних і потім їх використовувати. Тобто деструктуризація дозволяє нам отримати необхідні елементи з цих обʼєктів/масивів.
Також за допомогою операторів spread і rest  - можна розділити і обʼєднати елементи відповідно.
 */

//1.
const clients1: string[] = ['Гилберт', 'Сальваторе', 'Пирс', 'Соммерс', 'Форбс', 'Донован', 'Беннет'];
const clients2: string[] = ['Пирс', 'Зальцман', 'Сальваторе', 'Майклсон'];

// 1. Цей варіант мені здався більш легшим, але в результаті ми отримали лишню змінну
const clients: string[] = [...clients1, ...clients2];
// const arr: string[] = [...new Set(clients)];
// console.log(arr);

// 2. Цей варіант напевно більш коректніший
clients2.forEach(elem => {
    clients1.push(elem);
});

// const arr1: string[] = [...new Set(clients1)];
// console.log(arr1);

// ===================+++================++++++========== //

// 2.
interface Characters {
    name: string;
    lastName: string;
    age: number;
    gender: string;
    status: string;
}

const characters: Characters[] = [
    {
        name: 'Елена',
        lastName: 'Гилберт',
        age: 17,
        gender: 'woman',
        status: 'human',
    },
    {
        name: 'Кэролайн',
        lastName: 'Форбс',
        age: 17,
        gender: 'woman',
        status: 'human',
    },
    {
        name: 'Аларик',
        lastName: 'Зальцман',
        age: 31,
        gender: 'man',
        status: 'human',
    },
    {
        name: 'Дэймон',
        lastName: 'Сальваторе',
        age: 156,
        gender: 'man',
        status: 'vampire',
    },
    {
        name: 'Ребекка',
        lastName: 'Майклсон',
        age: 1089,
        gender: 'woman',
        status: 'vempire',
    },
    {
        name: 'Клаус',
        lastName: 'Майклсон',
        age: 1093,
        gender: 'man',
        status: 'vampire',
    },
];

const charactersShortInfo = characters.map(({ gender, status, ...other }) => other);

console.log(charactersShortInfo);

// ===================+++================++++++========== //

// 3.
interface User {
    name: string;
    years: number;
    isAdmin?: boolean;
}
const user1: User = {
    name: 'John',
    years: 30,
};

const { name: string, years, isAdmin = false } = user1;

console.log(name, years, isAdmin);

// ===================+++================++++++========== //

// 4.
interface Satoshi {
    name?: string;
    surname?: string;
    age?: number;
    country?: string;
    birth?: string;
    location?: object;
    hidden?: boolean;
    wallet?: string;
    browser?: string;
    technology?: string;
}

const satoshi2020: Satoshi = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
        lat: 38.869422,
        lng: 139.876632,
    },
};

const satoshi2019: Satoshi = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome',
};

const satoshi2018: Satoshi = {
    name: 'Satoshi',
    surname: 'Nakamoto',
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05',
};

// const fullProfile1 = (satoshi2018, satoshi2019, satoshi2020) => {
//     let obj3 = {};
//     for (let key in satoshi2018) {
//         obj3[key] = satoshi2018[key];
//     }
//     for (let key in satoshi2019) {
//         obj3[key] = satoshi2019[key];
//     }
//     for (let key in satoshi2020) {
//         obj3[key] = satoshi2020[key];
//     }
//     return obj3;
// };

// const fullProfile2 = Object.assign({}, satoshi2018, satoshi2019, satoshi2020);
const fullProfile: Satoshi = {
    ...satoshi2018,
    ...satoshi2019,
    ...satoshi2020,
};

// console.log(fullProfile1(satoshi2018, satoshi2019, satoshi2020));
// console.log(fullProfile2);
// console.log(t);

// ===================+++================++++++========== //

// 5.
interface Books {
    name: string;
    author: string;
}
const books: Books[] = [
    {
        name: 'Harry Potter',
        author: 'J.K. Rowling',
    },
    {
        name: 'Lord of the rings',
        author: 'J.R.R. Tolkien',
    },
    {
        name: 'The witcher',
        author: 'Andrzej Sapkowski',
    },
];

const bookToAdd: Books = {
    name: 'Game of thrones',
    author: 'George R. R. Martin',
};

const newBook: Books[] = [...books, bookToAdd];

console.log(newBook);

// ===================+++================++++++========== //

// 6.
interface Employee {
    name: string;
    surname: string;
    age?: number;
    salary?: string;
}
const employee: Employee = {
    name: 'Vitalii',
    surname: 'Klichko',
};

const newEmployer: Employee = { ...employee };
newEmployer.age = 50;
newEmployer.salary = '25000$';

console.log(newEmployer);

// ===================+++================++++++========== //

// 7.
const array: [string, Function] = ['value', () => 'showValue'];
const [value, showValue] = array;

alert(value); // має бути виведено 'value'
// alert(showValue()); // має бути виведено 'showValue'
