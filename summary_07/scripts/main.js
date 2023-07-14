// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,20,4,0,9,7,5,10,15,12,11,50,24,32,7,30];

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
let products = [ball, gloves, shoes, hammer, saw, shark];

// Контейнер товаров (DOM-элемент)
const productsContainer = document.querySelector('.products-container');

/*
1. Работаем с объектами.
 - создаем объект `newBall`. Он должен содержать те же свойства, что и объект `ball`.
 - в объект `newBall` добавить свойство `material`, и присвоить ему значение `leather`
 - в объект `newBall` добавляем метод `jump()`. Он должен вывести в консоль текст `The ball jumps`
 - перезаписать свойство `price` объекта `newBall` - поставить новое значение 150.
*/

const newBall = {...ball};

// const newObj = {};
// в объект записать следующие свойства: prop1: "Name", prop2: это должен быть объект с такими же свойствами как у объекта shark
// newObj.prop1 = 'Name';
// newObj.prop2 = { ...shark };

// console.log(newObj);

newBall.material = "leather";

newBall.jump = function() {
    console.log('The ball jumps');
}
console.log(newBall)
newBall.jump();

newBall.price = 150;

// запросить у пользовтаеля строку (ключ) через prompt, результат записать в переменную.
// объекту newBall добавить это свойство. Значение пусть будет 'dummy'


// const newKey = prompt("Enter new key:");
// newBall[newKey] = 'dummy';
// console.log("newBall =>",newBall);

/*
2. Освежаем методы массивов
 - добавить созданный объект `newBall` в массив `products`, в начало массива.
 - получить массив `lowCostedProducts`, в который войдут только те товары из массива `products`, у которых цена (свойство `price`) меньше 155.
 - найти в массиве товаров такой товар, у которого есть свойство `material`
 - увеличить цену у всех товаров в массиве товаров на 10 единиц.
 - получить объект со следующими свойствами (подсказка - нам нужно из массива получить ОДНО значение):
    - totalAmount - общая стоимость всех товаров
    - totalCount - количество всех товаров.
*/

products.unshift(newBall);
console.log(products);

const lowCostedProducts = products.filter( product => product.price < 155 );
console.log('lowCostedProducts', lowCostedProducts);

const newProduct = products.find( product => !!product.material );
// product.material === undefined
// !product.material === true
// !!product.material === false

// product.materail === "Leather"
// !product.material === false
// !!product.material === true
console.log('Product with material property', newProduct);

//  - увеличить цену у всех товаров в массиве товаров на 10 единиц.
products.forEach( function(elem) {
    elem.price = elem.price + 10;
} );
// 1st iteration: elem === newBall
// 2nd iteration: elem === ball
// ...
console.log('Increased prices', products);

/*
 - получить объект со следующими свойствами (подсказка - нам нужно из массива получить ОДНО значение):
    - totalAmount - общая стоимость всех товаров
    - totalCount - количество всех товаров.
*/

const result = products.reduce( (acc, val) => {
    // add the price of the product into accumulator
    acc.totalAmount = acc.totalAmount + val.price;
    // increase the count
    acc.totalCount++;
    // return the accumulator
    return acc;
}, { totalAmount: 0, totalCount: 0 } );
// Entering the 1st iteration:
// acc = { totalAmount: 0, totalCount: 0 }, val = newBall (products[0])
// Leaving the 1st iteration:
// acc = { totalAmount: 160, totalCount: 1 }, val = newBall (products[0])
// Entering the 2nd iteration:
// acc = { totalAmount: 160, totalCount: 1 }, val = ball (products[1])
// Leaving the 2nd iteration:
// acc = { totalAmount: 330, totalCount: 2 }, val = ball (products[1])
// ...

/*
5. Работаем с DOM. Наша задача - пройтись по массиву товаров, и для каждого элемента создать параграф (`<p>`), в котором будет текст "Товар НАЗВАНИЕ_ТОВАРА, цена - ЦЕНА_ТОВАРА". Этот параграф добавить в контейнер товаров (`div.products-container`).
*/

products.forEach( elem => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'Name: ' + elem.name + ', price = ' + elem.price;
    productsContainer.append(newParagraph);
});