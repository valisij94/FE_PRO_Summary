// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,20,4,0,9,7,5,10,15,12,11,50,24,32,7,30];

// const sum = numbers.reduce( (acc, val) => {
//     if (val % 2 === 0) {
//         acc = acc + val;
//     }
//     return acc;
// }, 0);
// console.log(sum);


/*
1. Повторение работы с массивами. Работаем с разными методами массивов.
 - посчитать сумму элементов массива numbers. Сделаем это двумя способами:
    - через перебор массива (`forEach`)
    - с использованием метода массивов `reduce`
*/
// const result = numbers.reduce( (counter, item) => {
//     return counter + item;
// }, 0);
// acc = 0, val = 1
// The end of 1st iteration: acc = 1, val = 1
// The start of 2nd iteration: acc = 1, val = 3
// The end of 2nd iteration: acc = 4, val = 3
// The start of 3rd iteation: acc = 4, val = 6
// The end of 3rd iteration: acc = 10, val = 6
//...

// console.log(result);

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

// const sumProducts = products.reduce( (acc, product) => {
//     return acc + product.price;
// }, 0);
// console.log(sumProducts);

/*
 - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
 */
// let categories = products.reduce( ( acc, product ) => {
//     if (acc.indexOf(product.category) === -1) {
//         acc.push(product.category);
//     }
//     return acc;
// }, []);
// console.log(categories)
// Start of 1st iteration: acc = [], product = ball
// End of the 1st iteration: acc = ['Sport'], product = ball
// Start of 2nd iteration: acc = ['Sport'], product = gloves
// End of 2nd iteration: acc = ['Sport'], product = gloves
// ...
// Start of 4rd iteration: acc = ['Sport'], product = hammer
// End of 4th iteration: acc = ['Sport', 'Tools'], product = hammer
// const res = numbers.reduce( (acc, val) => acc + Math.pow(val,2), 0);
// console.log(res);

// const strings = ['Str1', 'Product', 'Timon', 'Simba', 'Pumba', 'Accumulator'];

// const res1 = strings.reduce ((counter, item) => {
//     return counter + item.length;
// }, 0)
// console.log(res1);

/* посчитать сумму четных элементов массива numbers c использованием метода reduce */


/*
 - получить сумму квадратов массива numbers
 - получить суммарную стоимость всех товаров массива products
 - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
 - получить объект, в котором будут категории товаров.
 - получить объект, в котором будут суммарные стоимости товаров по категориям.
*/


const productsContainer = document.querySelector('.products-container')

const selectEl = document.querySelector('#categorySelect');
const options = selectEl.querySelectorAll('option');

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Hello World!';
console.dir(newParagraph);

productsContainer.before(newParagraph);

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

products.forEach( (product) => {
    renderProduct(product);
})

// Записать в эту переменную все параграфы (тег p) с классом product-name
const productNames = document.querySelectorAll('p.product-name')

console.log(productNames);

/*
9. Теперь отрендрим список товаров. У нас в main.js определена функция `renderProduct`. Она ожидает на вход объект товара, создает DOM-элемент, и добавляет его на страницу (в контейнер). У нас есть массив товаров `products`. Нужно отрендерить эти товары, вызовом функции `renderProduct` для каждого элемента массива `products`. Т.е. пройтись по массиву и вызвать функцию для каждого элемента.
*/

// Заготовка функции отрисовки массива товаров (для задачи 10)
function renderProductsArray(productsArray) {
    // Цикл, который очищает контейнер товаров (удаляет из него все отрендеренные карточки товаров)
    while (productsContainer.lastChild) {
        productsContainer.lastChild.remove();
    }
    // Сюда нужно добавить код для задачи №10.
}

// Заготовка обработчика события выбора в выпадающем списке (для задачи 11)
const select = document.querySelector('select#categorySelect');
select.addEventListener('change', (event) => {
    // В переменную selectedCategory будет записано название выбранной категории
    const selectedCategory = event.target.value;
    // Сюда нужно добавить код для задачи 11
    // То есть, отфильтровать массив products, и отрендерить результат
});
