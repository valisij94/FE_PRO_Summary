// Здесь пока ничего нет - и нам предстоит это исправить!
// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

const ball = {
    id: 1,
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    id: 2,
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    id: 3,
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    id: 4,
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    id: 5,
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    id: 6,
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

class Cart {

    #products = {};
    #totalCartPrice = 0;

    constructor(userId) {
        this.userId = userId;
    }

    showCart() {
        console.log('Products:\n', this.#products);
        console.log('Total price:', this.#totalCartPrice);
    }

    addToCart(productId, productPrice) {
        /**
         * Falsy-значения: udefined, null, '', 0, NaN
         * все остальное - Truthy-значения
         * !falsy-значение будет true
         * !undefined === !null === !'' === !0 === !NaN === true
         * !!undefined === !!null === !!'' === !!0 === !!NaN === false
         */
        if ( !this.#products[productId] ) {
            this.#products[productId] = 1;
        }
        else {
            this.#products[productId] += 1;
        }
        // if (this.#products.hasOwnProperty(productId)) {
        //     this.#products[productId] = this.#products[productId] + 1;
        // }
        // else {
        //     this.#products[productId] = 1;
        // }
        this.#totalCartPrice = this.#totalCartPrice + productPrice;
    }

    dropFromCart(productId, productPrice) {
        if (this.#products[productId]) {
            if (this.#products[productId] > 1) {
                this.#products[productId]--;
            }
            else {
                delete this.#products[productId];
            }
            this.#totalCartPrice = Math.max(0, this.#totalCartPrice - productPrice);
        }
    }
}

const cart = new Cart(1);

const productsContainer = document.querySelector('.products-container')
function renderProducts(products) {
    products.forEach( product => {
        const productContainer = document.createElement('div');
        productContainer.dataset.name = product.name;
        const productName = document.createElement('p');
        const productCategory = document.createElement('p');
        const productPrice = document.createElement('p');
        const productHeader = document.createElement('div');

        // добавляем картинку
        const productImg = document.createElement('img');
        productImg.src = product.img;

        // применяем стили
        productContainer.classList.add('product-card');
        productName.classList.add('product-header');

        // добавляем текстовки элементов
        productName.innerText = product.name;
        productCategory.innerText = product.category;
        productPrice.innerText = product.price + " RUB";
        // добавляем элементы в контейнер
        productHeader.append(productName, productPrice);

        // создать 2 кнопки, с текстами "Добавить", "Убрать", и
        // добавить их в картоску товара
        const addBtn = document.createElement('button');
        addBtn.innerText = 'Add';
        addBtn.classList.add('button', 'buttonAdd');

        addBtn.addEventListener('click', (event) => {
            cart.addToCart(product.id, product.price);
        });
        const dropBtn = document.createElement('button');
        dropBtn.innerText = 'Drop';
        dropBtn.classList.add('button', 'buttonDrop');

        dropBtn.addEventListener('click', (event) => {
            cart.dropFromCart(product.id, product.price);
        });
        productContainer.append(productImg, productHeader, productCategory, addBtn, dropBtn);
        // добавляем наш товар в контейнер
        productsContainer.append(productContainer);
    });
}
renderProducts(products);

/*
1. Пристрелочная задача на классы. Мы хотим реализовать функциональность корзины для нашего интернет-магазина. Нужно создать класс `Cart` для представления корзины. У него будут:
 - приватное свойство `products` - ОБЪЕКТ, в котором мы будем держать данные о товарах, добавленных в корзину
 - приватное свойство `totalCartPrice` - суммарная стоимость товаров в корзине
 - публичное свойство `userId` - идентификатор текущего пользователя. Он будет заходить в параметрах конструктора.
*/

/*
2. Пишем метод `showCart`. Он должен просто выводить в консоль наш объект `products`, и свойство `totalCartPrice`
*/

/*
3. Добавляем методы для нашего класса `Cart` - нужно научиться добавлять товары в нашу корзину. Добавляем метод `addProduct` в класс `Cart`. Он принимает в аргументах ID товара, который хотим добавить, и его цену. При добавлении, нам нужно проверить, есть ли у нас в объекте `products` свойство с таким именем, и если есть - то значение этого свойства увеличить на 1. Если такого свойства нет - то добавляем это свойство в объект `products`, и значение ставим 1. А цену товара мы прибавляем к свойству `totalCartPrice`
```
let cartInstance = new Cart(1); // создаем новый объект корзины, с ИД пользователя = 1
cartInstance.showCart(); // {} // пока что корзина пустая
cartInstance.addToCart(5, 100); // добавляем в корзину товар с ИД = 5 и ценой 100
cartInstance.showCart(); // { 5: 1 }, 100 - в нашу корзину добавился товар с ИД = 5, количество - 1. Общая цена - 100
cartInstance.addToCart(5, 100); // { 5: 2 }, 200 - в корзину добавляем еще один товар с ИД = 5. Он там уже есть, так что увеличиваем количество. Общая цена - 200.

cart = {}
{
    1: 12, // товар с ИД=1, количество - 12 единиц
    2: 5, // товар с ИД=2, количество - 5 единиц
    6: 9, // товар с ИД=6, количество - 9 единиц
}
```
*/

/*
4. Теперь пишем метод удаления товара из корзины `dropFromCart`. Он также принимает в аргументах ИД товара и цену этого товара. Его задача - если в объекте `products` нет такого свойства, то ничего не делаем, а если есть такое свойство, то:
 - если значение свойства больше 1 - то уменьшить значение свойства на 1
 - если значение свойства равно 1 - то удалить из объекта `products` это свойство. Используем конструкцию `delete this.#products[id]`
 - вычесть цену товара из `totalCartPrice`
 */

 /*
 7. Теперь, нам нужно добавить обработчики событий на клик по каждой из наших кнопок. Для этого, нам снова понадобится изменить функцию `renderProducts`. Нам нужно, чтобы при клике на кнопки в карточках товара, этот товар добавлялся/удалялся из корзины. То есть, чтобы вызывались методы `addToCart`, `removeFromCart` с нужными аргументами.
 */

/*
5. Добавим функциональности в наш макет. У нас есть функция `renderProducts`, которая принимает на вход массив товаров, и рендерит их в контейнер. Нам нужно добавить в карточку каждого товара кнопки, "В корзину", "Убрать".
*/