// Зедсь пока ничего нет - и нам предстоит это исправить!

/*
Вспоминаем сетевые запросы. Наша задача - обратиться к "бэку" по адресу https://fakestoreapi.com/products/categories GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
*/

// const categorySelect = document.querySelector('#categorySelect');

// function getCategories() {
//     fetch('https://fakestoreapi.com/products/categories')
//         .then( resp => {
//             if (resp.ok)
//                 return resp.json();
//             else {
//                 throw new Error('Failed request!')
//             }
//         })
//         .then( categories => {
//             console.log(categories);
//             categories.forEach(element => {
//                 const el = document.createElement('option');
//                 el.value = element;
//                 el.textContent = element.charAt(0).toUpperCase() + element.slice(1);
//                 categorySelect.append(el);
//             });
//         })
//         .catch( err => console.log('Something went wrong! ' + err));
// };

// getCategories();

/*
2. Добавляем в разметку компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же, но с большой буквы (т.е. надо сделать первую букву значения заглавной).
*/

/*
4. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://fakestoreapi.com/products/category/CATEGORY`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.products-container`). ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим в виде карточек, класс - `product-item`.
*/

// const productList = document.querySelector('.products-container');
// function getProducts(category) {
//     fetch(`https://fakestoreapi.com/products/category/${category}`)
//         .then( resp => resp.json() )
//         .then( products => {

//             productList.innerHTML = '';

//             products.forEach(product => {
//                 const productCard = document.createElement('div');
//                 productCard.classList.add('product-card');
//                 const productName = document.createElement('h2');
//                 productName.textContent = product.title;
//                 const productPrice = document.createElement('p');
//                 productPrice.textContent = product.price;
//                 const productDescr = document.createElement('p');
//                 productDescr.textContent = product.description;
//                 productCard.append(productName, productPrice, productDescr);

//                 productList.append(productCard);
//             });
//         });
// }

// categorySelect.addEventListener('change', (e) => {
//     const category = e.target.value;
//     getProducts(category);
// });

/*
 нам нужно создать объект, у которого будут свойства name, price, description, category. И этот ответ отправить в теле POST-запроса на адрес `https://fakestoreapi.com/products`.
 */
//  function saveProduct(product) {
//     fetch(`https://fakestoreapi.com/products`, {
//         method: 'POST',
//         body: JSON.stringify(product),
//         headers: {
//             'Content-Type': 'application/json',
//             'Custom-Header': 'dummy'
//         }
//     }).then( resp => resp.json() )
//       .then( data => console.log(data) );
//  }

//  const prod = {
//     title: 'Title',
//     description: 'Descr',
//     price: 10,
//     img: '',
//     category: 'jewerely'
//  };

//  saveProduct(prod);

//  const str = '{"name": "name"}'
//  const parsed = JSON.parse(str);
//  console.log(parsed)

/*
6. Работаем с конструкторами. Создаем функцию-конструктор для создания новых товаров. Она должна принимать ID, название, цену, описание и категорию товара, и создавать объект с такими свойствами.
*/

/*
 7. Добавляем в нашу функцию-конструктор метод `describe`. Его задача - вывести в консоль текст вида "Товар product_name, цена - product_price". Рекомендуется действовать через прототип.
 */

function Product(id, name, price, description, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
};

// const p = Product.prototype;
// p.describe = function() {
//     console.log('Now product '+this.name);
// }

// const prod = new Product(1, 'Name', 10, 'Descr', 'jewelery');

// function describe() {
//     console.log('Hi from here!')
// }

// const obj = {};
// console.log(obj)

/*
8. Создаем первое приближение корзины. Наша задача - создать функцию-конструктор, которая будет создавать нам сущность корзины. На вход она будет принимать `userId` - то есть идентификатор пользователя, кому принадлежит текущая корзина. В свойствах у нее будет ОБЪЕКТ, с данными товаров (т.е. товары, добавленные в корзину). Объект в качестве ключей использует ID товаров, а в качестве значений - количество добавленных товаров. По умолчанию (при создании объекта) - корзина пустая.
*/

function Cart(userId) {
    this.userId = userId;
    this.products = {};
}

/*
9. Добавляем методы работы с корзиной. Первый метод - добавить товар в корзину. Параметр метода - объект товара. Нужно проверить, есть ли в "корзине" товар с таким ИД. Если есть - увеличить его количество, если нет - добавить такой ключ, а количество поставить 1.
*/

Cart.prototype.add = function(product) {
    if ( this.products[product.id] ) {
        this.products[product.id]++;
    }
    else {
        this.products[product.id] = 1;
    }
}

const prod1 = new Product(1, 'Tovar', 5);
const prod2 = new Product(2, 'T2', 10);

let cart = new Cart(1);

cart.add(prod1);
cart.add(prod2);
cart.add(prod1);

console.log(cart);

/*
10. Удаление товара из корзины. Метод удаления принимает на вход объект товара. Нужно проверить, есть ли такой товар в корзине. Если его нет - ничего не делаем. Если есть - уменьшаем кол-во на 1. Но нужно, чтобы у нас не было товаров с количеством меньше либо равным 0 (т.е. нужно удалять свойства объекта через `delete`)
 */

Cart.prototype.drop = function(product) {
    if ( this.products[product.id] ) {
        if (this.products[product.id] === 1) {
            delete this.products[product.id];
        }
        else {
            this.products[product.id]--;
        }
    }
}

cart.drop(prod1);
cart.drop(prod2);

console.log(cart);