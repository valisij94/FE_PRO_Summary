// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 160
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
    price: 180
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
    price: 210
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
//let products = [ball, gloves, shoes, hammer, saw];

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

    // изображение
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', product.img);
    imgEl.classList.add('product-img');

    // добавляем текстовки элементов
    productName.innerText = product.name;
    productCategory.innerText = product.category;
    productPrice.innerText = product.price + " RUB";
    // добавляем элементы в контейнер
    productHeader.append(productName, productPrice);
    productContainer.append(imgEl, productHeader, productCategory);
    // добавляем наш товар в контейнер
    productsContainer.append(productContainer);
}


/* дан массив numbers. Посчитать сумму элементов массива, результат вывести в консоль. */
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

// let result = numbers.reduce( function(acc, val) {
//     return acc + val;
// }, 0);
// console.log(result);

/* вывести в консоль только четные элементы массива numbers (те, которые делятся на 2 без остатка)*/
// const res = numbers.forEach( function(num, idx, thisArg) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// });
// console.log('result', res)

// numbers.forEach( (num) => {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// })

/* вывести в консоль только те элементы массива numbers, которые делятся без остатка на 2 и на 3.*/
// numbers.forEach( (num) => {
//     if ( (num % 2 === 0) && (num % 3 === 0)) {
//         console.log(num);
//     }
// })

// - добавить в массив numbers число 11 (в конец).
// const res = numbers.push(11, 12, 13);
// console.log(numbers, res);

// - убрать из массива numbers число 11 (из конца).
// const res = numbers.pop();
// console.log(res, numbers)

// - переместить первый элемент массива numbers в конец массива.
// numbers.push(numbers.shift());
// console.log(numbers);

// - вернуть элемент обратно.
// numbers.unshift(numbers.pop());
// console.log(numbers);

// - получить массив, который состоит из "среза" массива numbers, начиная с 3-го элемента.
// const sliced = numbers.slice(2);
// console.log(sliced);

// ввыести в консоль массив в обратном порядке
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }
// numbers.reverse();
// console.log(numbers);

/* вставить число 999 на 3-ю позицию в массив (т.е. numbers[2] = 999). Все последующие элементы должны "сдвинуться".
*/
// numbers.splice(2, 0, 999);
// console.log(numbers)

// - получить массив twiceNumbers, который будет состоять из элементов массива numbers, помноженных на 2. То есть, первый элемент массива twiceNumbers равен 2 * первый элемент массива numbers, и т.д.
// const twiceNumbers = numbers.map( (item) => {
//     return item * 2;
// });

// console.log(twiceNumbers);

//  получить массив squares, который будет состоять из квадратов чисел массива numbers.
// const squares = numbers.map( (item) => {
//     return item * item; // Math.pow(item, 2) // item ** 2;
// });
// console.log(squares);

/*
получить из массива products массив, который будет содержать только наименования товаров (ожидаемый результат - `['Ball', 'Gloves', 'Sport Shoes', 'Hammer', 'Saw', 'Shark toy']`)
*/
let products = [ball, gloves, shoes, hammer, saw];
// const productNames = products.map( (item) => {
//     return item.name;
// });
// productNames = [];
// 1-st iteration
// item == ball
// returns ball.name - Ball
// productNames = ['Ball']
// 2-nd iteration
// item == gloves
// returns gloves.name - Gloves
// productNames = ['Ball', 'Gloves']
// ...
// console.log(productNames)

/*
получить из массива products массив объектов, которые содержат только название и цену товара. То есть, объект товара "превращается" в объект, у которого есть только свойства name, price.
*/
// let newProducts = products.map( (item) => {
//     const result = {};
//     result.name = item.name;
//     result.price = item.price;
//     /**
//      * result = {
//      *   name: item.name,
//      *   price: item.price
//      * }
//      */
//     return result;
// });

// console.log(newProducts)

// // получить массив evenNumbers, который состоит только из четных элементов массива numbers.
// const evenNumbers = numbers.filter( (item) => {
//     return item % 2 === 0;
// });
// console.log(evenNumbers);

// получить массив newNumbers, который будет содержать только те элементы массива numbers, которые больше 4 и меньше 8.
const newNumbers = numbers.filter( (item) => {
    return item > 4 && item < 8;
});
console.log(newNumbers);