// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

const productsContainer = document.querySelector('.products-container')
function renderProduct(product) {
    const productContainer = document.createElement('div');
    productContainer.dataset.name = product.name;
    const productName = document.createElement('p');
    const productCategory = document.createElement('p');
    const productPrice = document.createElement('p');
    const productHeader = document.createElement('div');

    // применяем стили
    productContainer.classList.add('product-card');
    productName.classList.add('product-name');

    // добавляем текстовки элементов
    productName.innerText = product.name;
    productCategory.innerText = product.category;
    productPrice.innerText = product.price + " RUB";
    // добавляем элементы в контейнер
    productHeader.append(productName, productPrice);
    productContainer.append(productHeader, productCategory);
    // добавляем наш товар в контейнер
    productsContainer.append(productContainer);
}

// const age = +prompt('Ваш возраст?');
// if (age >= 21) {
//     console.log('Доступ разрешен')
// }
// else {
//     console.log('Prohibited')
// }

/*
пишем блок проверки делимости числа на 2. Нужно запросить у пользователя число (метод `prompt`). Если число делится на 2 без остатка - выводим в консоль сообщение "Кратно двум", а если не делится - то выводим сообщение "Не кратно двум".  Проверить, делится ли число А на число В без остатка можно с использованием оператора `%`-  остаток от деления.
*/

// const number = +prompt('Input a number');
// if ( number % 2 === 0) {
//     console.log('Even')
// }
// else {
//     console.log('Odd');
// }

/*
усложняем предыдущую задачу. Теперь проверяем на кратность 2 и 3. То есть, запрашиваем число вызовом `prompt`. Если число делится на 2 - выводим "Кратно двум". Если делится на 3 - выводим "Кратно трем". Если делится и на 2 и на 3 - выводим "Кратно 2 и 3". Если не делится ни на что - выводим "Не кратно 2 и 3".
*/

// const num = +prompt('Input a number');
// if (num % 2 === 0) {
//     if (num % 3 === 0) console.log('кратно 2 и 3');
//     else console.log('кратно 2')
// }
// else {
//     if (num % 3 === 0) console.log('кратно 3');
//     else console.log('не кратно ни 2 ни 3')
// }

/*
 - немного усложняем задачу про возраст. Теперь нам нужно спросить у пользователя его возраст (методом `prompt`), и рассматривать 3 случая:
     - возраст меньше 21 - выводим сообщение "Доступ запрещен".
     - возраст от 21 до 45 - выводим сообщение "Доступ открыт".
     - возраст больше 45 - выводим сообщение "Доступ ограничен".
 Для реализации, нам нужны логические операторы и вложенные условия.
 */

//  const num = +prompt('Enter your age');
//  if ( num < 21 ) {
//     console.log('Access denied')
//  }
//  else if (num <= 45) {
//     console.log('Access granted')
//  }
//  else console.log('Access limited');

//  // second way
//  if ( num >= 21 && num < 45) {
//     console.log('Access granted')
//  }
//  else {
//     if (num < 21) console.log('Access denied')
//     else console.log('Access limited');
//  }

/*
 - продолжаем работу с логическими операторами. Теперь нам нужно проверить, что возраст пользователя лежит ВНЕ диапазона 21-45. То есть, мы запрашиваем возраст методом `prompt`, и если возраст меньше 21 ИЛИ больше 45 - выводим в консоль сообщение "Доступ открыт". Если возраст в диапазоне - ничего не делаем.
 ||
 */
//  const num = +prompt('Enter your age');
//  if ( num < 21 || num > 45 ) console.log('Access granted')

/*
работаем с оператором отрицания `!` (логическое НЕ). Переписать предыдущую задачу так, чтобы там использовалось отрицание.

*/
//  const num = +prompt('Enter your age');
//  if ( !(num >= 21 && num < 45) ) console.log('Access granted')

/*
Задача "со звездочкой". Запросить у пользователя его имя методом `prompt`. Если пользователь ввел пустую строку или 0 - ввыести в консоль сообщение "Имя неверно!". При этом НЕ использовать логическое ИЛИ.
*/
// const name = prompt('Enter your name');
// if (!name) {
//     /*
//         1. Преобразуем переменную name в boolean
//         2. Применяем логичское отрицание к результату (НЕ-результат)
//     */
//     console.log('Incorrect name')
// }
/* Falsy - значения. Это значения которые при преобразовании в boolean будут расценены как false
0, '' (пустая строка), null, undefined, false, NaN
*/

/*
- пишем блок кода, который поприветствует пользователя на его родном языке. Запрашиваем у пользователя через метод `prompt` страну происхождения ("Откуда Вы родом?"). Если страна - Россия, то выводим в консоль "Добрый день!", если Украина - выводим "Доброго дня!", Беларусь - "Добры дзень!", Германия - "Guten Tag!".
*/
// const expr = prompt('Where are you from?');
// switch (expr) {
//     case "Russia" : {
//         console.log('Добрый день!')
//         break;
//     }
//     case "Belarus" : {
//         console.log('Добры дзень!')
//         break;
//     }
//     case "Ukraine" : {
//         console.log('Доброго дня!')
//         break;
//     }
//     case "Germany" : {
//         console.log('Guten Tag!')
//         break;
//     }
//     default: {
//         console.log("Good afternoon!")
//     }
// }

/*
- запросить у пользователя город, откуда он родом. Если город соответствует вашему родному городу, выводим в консоль "Привет, земляк!", иначе - выводим "Отличный город!". Для этого используем тернарный условный оператор.
*/
// const city = prompt('Enter your city');
// (city === 'Kharkov') ? console.log('Hi, brother!') : console.log('Nice city!');

/** написать блок кода, который запрашивает число, и если число делится на 2 - выводим в консоль "Четное", а иначе - "Нечетное". Использовать тернарный условный оператор */
// const num = +prompt('Enter a number');
// const text = (num % 2 === 0 ) ? 'EVEN' : 'ODD';
// console.log(text);

/*
 - написать цикл, который 10 раз выведет в консоль "Простая итерация". Написать 3 разных варианта: с предусловием (`while`), с постусловием (`do ... while`), и с параметром (`for`).*/
//  // 1 вариант - с предусловием
//  let i = 0;
//  while (i < 10) {
//     console.log('Simple iteration');
//     i++; // i = i + 1
//  }
//  console.log(i)

//  // 2 вариант - цикл с постусловием
//  let j = 0;
//  do {
//     console.log('Second variation of simple iteration');
//     j++;
//  } while (j < 10);
//  console.log(j)

//  // 3 вариант - цикл с параметром
//  for (let k = 0; k < 10; k = k + 1) {
//     console.log('Thrid variation of simple iteration');
//  }

/*
 - немного усложним задачу. Теперь в консоль нужно выводить номер итерации. Т.е. "простая итерация 0", "простая итерация 1", и т.д. Рекомендуется использовать цикл с параметром.
 */

  // 1 вариант - с предусловием
//  let i = 0;
//  while (i < 10) {
//     console.log('Simple iteration - ', i);
//     i++; // i = i + 1
//  }
//  console.log(i)

//  // 2 вариант - цикл с постусловием
//  let j = 0;
//  do {
//     console.log('Second variation of simple iteration - ', j);
//     j++;
//  } while (j < 10);
//  console.log(j)

//  // 3 вариант - цикл с параметром
//  for (let k = 0; k < 10; k = k + 1) {
//     console.log('Thrid variation of simple iteration - ', k);
//  }

/*
- пишем блок кода, который посчитает сумму чисел от 0 до числа, которое ввел пользователь, и выведет результат в консоль. Т.е. например, пользователь ввел 5 - считаем 1 + 2 + 3 + 4 + 5 = 15. */
// const num = +prompt('Enter a number');
// let sum = 0;
// for (let i = 0; i <= num; i = i + 1 ) {
    // 1st iteration: i = 0, sum = 0, num = 5
    // End of fisrst iteration: i = 1, sum = 0, num = 5
    // --
    // 2nd iteration: i = 1, sum = 0, num = 5
    // End of 2nd iteration: i = 2, sum = 1, num = 5
    // ---
    // 3rd iteratuin: i = 2, sum = 1, num = 5
    // End 3rd iteration: i = 3, sum = 3, num = 5
    // --
    // 4th iteration: i = 3, sum = 3, num = 5
    // End 4th iteration: i = 4, sum = 6, num = 5
    // --
    // 5th iteration: i = 4; sum = 6, num = 5
    // End 5th iteration: i = 5; sum = 10, num = 5
    // --
    // 6th iteration: i = 5; sum = 10, num = 5
    // End of 6th iteration: i = 6; sum = 15; num = 5
    // --
    // EXIT
    // sum = sum + i;
    // i = i + 1
// }
// console.log(sum);
//...