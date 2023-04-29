// 1. Опишіть своїми словами як працює метод forEach?
// Метод forEach дозволяє перебрати масив і для кожного елемента масиву він викликає функцію. Є три аргументи в метода forEach: item - елемент масиву, іndex - його номер, arr - сам масив. Синтаксис: arr.forEach(function(item, index, arr)) {робимо якісь дії з item}  За допомогою метода forEach ми перебираємо масив, так же само, як і за допомогою цикла for або for.. of.

// 2. Як очистити масив?
// 1) Можна очистити масив за допомогою того, що присвоїти йому нульову довжину (length = 0;)
//let test = [1, 2, 3, 4, 5];
//test.length = 0;
// 2) Також можна очистити масив за допомогою метода splice
//let test = [1, 2, 3, 4, 5];
//test.splice(0);

// 3. Як можна перевірити, що та чи інша змінна є масивом?
// Так як масиви не мають окремого типу даних (вони є обʼєктами), методом typeof їх не відрізниш від обʼєктів.
// Тому ми можемо використати метод Array.isArray. Він повертає true - якщо значенням буде масив, інакше false.

function filterBy1(arr, type) {
    const result = [];
    for (let element of arr) {
        if (typeof element != type) {
            result.push(element);
        }
    }
    return result;
}
console.log(filterBy1(['hello', 'world', 23, '23', null], 'number'));

//  І також я спробував зробити це завдання через фільтр.

const res = (arr, type) => arr.filter(item => typeof item != type);
console.log(res(['hello', 'world', 23, '23', null, false], 'string'));

// function filterBy2(arr, type) {
//     const result = arr.filter(item => typeof item != type);
//     return result;
// };

// console.log(filterBy2(['hello', 'world', 23, '23', null, false], 'string'));
