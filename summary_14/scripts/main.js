// Здесь пока ничего нет - и нам предстоит это исправить!
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
let products = [ball, gloves, shoes, hammer, saw, shark];

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
        productContainer.append(productImg, productHeader, productCategory);
        // добавляем наш товар в контейнер
        productsContainer.append(productContainer);
    });
}
renderProducts(products);