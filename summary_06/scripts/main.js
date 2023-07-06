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
