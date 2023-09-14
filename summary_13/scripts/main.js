// Здесь пока ничего нет - и нам предстоит это исправить!

/*
1. Освежаем в памяти классы. Создаем класс для представления сущностей товаров нашего интернет-магазина. Нужно создать класс `Product`, у которого будут приватное свойство `id`, и публичные свойства - наименование, цена, описание. Конструктор класса принимает ИД, наименование, цену и описание. Из методов, у него должен быть метод `getInfo` - он должен возвращать строку вида "Товар Ball, цена 100".
*/

// class Product {

//     #id; // ID of the product
//     name; // Name of the product
//     price; // The price
//     description; // Short description

//     constructor(id, name, price, description) {
//         this.#id = id;
//         this.name = name;
//         this.price = price;
//         this.description = description;
//     }

//     getInfo() {
//         return `Товар ${this.name}, цена ${this.price}`;
//     }
// }

// const newProduct = new Product(1, 'Ball', 100, 'Round ball');
// console.log(newProduct);
// console.log(newProduct.getInfo());

/*
2. Добавляем в класс геттер и сеттер для свойства `id`.
*/
class Product {

    #id; // ID of the product
    name; // Name of the product
    price; // The price
    description; // Short description

    constructor(id, name, price, description) {
        this.#id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getInfo() {
        return `Товар ${this.name}, цена ${this.price}`;
    }

    get id() {
        return this.#id;
    }

    set id(newId) {
        this.#id = newId;
    }

    addDiscount() {
        this.price = this.price * 0.9;
    }
}

/*
3. Делаем классы `ToolsProduct`, `SportProduct` - для товаров-инструментов и спорттоваров. Товары-инструменты должны иметь публичное свойство `material` (из чего они изготовлены - wood, steel), а спорттовары - свойство `kind`, то есть вид спорта, к которому относятся (footbal, basketbal, ...). Соответственно, эти свойства "заходят" к ним в конструкторы. Оба класса должны по-своему реализовать метод `getInfo`:
 - `SportProduct` должен выводить "Товар Ball для спорта footbal, цена 100"
 - `ToolsProduct` должен выводить "Инструмент Hammer, материал steel, цена 100".
 */

 class ToolsProduct extends Product {

    constructor(id, name, price, description, material) {
        super(id, name, price, description);
        this.material = material;
    }

    getInfo() {
        return `${super.getInfo()}\nИнструмент ${this.name}, материал ${this.material}`;
    }
 }

 class SportProduct extends Product {

    constructor(id, name, price, description, kind) {
        super(id, name, price, description);
        this.kind = kind;
    }

    getInfo() {
        return `Товар ${this.name}, для спорта ${this.kind}`;
    }
 }

 /*
 4. Добавляем возможность "уценки" товара. Теперь ВСЕ наши товары должны иметь метод `addDiscount`. Метод должен уменьшать цену товара на 10%.
 */

/*
5. Для товаров класса `SportProduct`, меняем реализацию метода `getInfo` - теперь он должен выводить 2 сообщения. Первое - это сообщение из метода-родителя, а второе - свое.
```
hammer.getInfo();
// Товар Hammer, цена 100
// Инструмент Hammer, материал steel, цена 100
```
То есть, нам нужно вызвать метод родителя.
*/

// const hammer =  new ToolsProduct(1, 'Hammer', 100, 'Descr', 'stell');
// console.log(hammer.getInfo())

/*
6. Представим, что мы пишем библиотеку компонентов. Нам нужно реализовать класс `SimplePaginator`, который будет предоставлять возможности пагинации. Пагинация - это разбивка большого кол-ва данных на "страницы". Пример - товары в интернет-магазине, которые показываются по 20 штук. Класс должен принимать в конструкторе:
 - массив с элементами (товарами)
 - количество элементов на странице

И класс должен в конструкторе реализовать такую логику:
 - запомнить в свойство `itemsCount` общее количество элементов
 - посчитать и запомнить в свойстве `pagesCount` количество страниц, которые необходимы для отображения кол-ва товаров
```
const paginator = new SimplePaginator([hammer, ball, shark, saw, drill, shoes, gloves, powerSaw, scissors], 4);
paginator.itemsCount; // 9
paginator.pagesCount; // 3 - потому что на одной странице размещаем 4 товара, соответственно, для отображения 9 товаров нам нужно 3 страницы
```
*/

class SimplePaginator {

    constructor( products, itemsPerPage ) {
        this.items = products;
        this.itemsPerPage = itemsPerPage;
        this.itemsCount = products.length;
        this.pagesCount = Math.ceil( products.length / itemsPerPage);
    }

    getProductsForPage(pageNum) {
        // [hammer, ball, shark, saw, drill, shoes, gloves, powerSaw, scissors]
        // pageNum = 1:
        // startPos = 1 * 4 = 4;
        // Make slice from 4th element (drill), to 8th element (scissors)

        // pageNum = 0
        // startPos = 0 * 4 = 0
        // Make slice from 0th element (hammer) to 4th element (drill)
        const startPos = pageNum * this.itemsPerPage;
        return this.items.slice(startPos, startPos + this.itemsPerPage);
    }

    getPageIndex(itemIndex) {
        // [hammer, ball, shark, saw, drill, shoes, gloves, powerSaw, scissors]
        return Math.ceil(itemIndex / this.itemsPerPage);
    }
}

const hammer = new ToolsProduct(1, 'Hammer', 120, 'Hammer description', 'steel');
const ball = new SportProduct(2, 'Ball', 100, 'Ball description', 'basketball');
const shark = new Product(3, 'Shark toy', 180, 'Shark toy description');
const saw = new ToolsProduct(4, 'Saw', 120, 'Saw description', 'stainless steel');
const drill = new ToolsProduct(5, 'Drill', 320, 'Drill description', 'plastic');
const shoes = new Product(6, 'Shoes', 220, 'Shoes description');
const gloves = new Product(7, 'Gloves', 250, 'Gloves description');
const powerSaw = new ToolsProduct(8, 'PowerSaw', 420, 'Powersaw description', 'steel');
const scissors = new ToolsProduct(9, 'Scissors', 80, 'Scissors description', 'steel');

const simplePaginator = new SimplePaginator([
    hammer, ball, shark, saw, drill, shoes, gloves, powerSaw, scissors
], 4);

const pages = simplePaginator.getProductsForPage(0);
console.log(pages);
console.log(simplePaginator.getProductsForPage(1));
console.log(simplePaginator.getProductsForPage(2));


/*
7. Добавляем функциональности в наш пагинатор. Делаем метод `getProductsForPage(pageNum)` - должен возвращать массив, который содержит те товары, которые должны быть отрендерены на странице `pageNum`. Нумерация страниц - с 0.
```
paginator.getProductsForPage(0); // [hammer, ball, shark, saw]
paginator.getProductsForPage(1); // [drill, shoes, gloves, powerSaw]
paginator.getProductsForPage(2); // [scissors]
```
*/

/*
8. Делаем метод `getPageIndex(itemNum)` - он должен вернуть порядковый номер страницы, на которой показан товар с порядковым номером `itemNum`. Порядковый номер соответствует индексу товара в массиве товаров, который был передан в конструкторе.
```
paginator.getPageIndex(2); // 0 - потому что товар с индексом 2 (shark) размещается на 0-й странице
paginator.getPageIndex(5); // 1 - потому что товар с индексом 5 (shoes) размещается на 1-й странице
```
*/

/*
9. Отвлечемся от темы интернет-магазина, и реализуем класс `VersionsControl`. Он должен реализовать логику работы системы контроля версий. Класс принимает в конструкторе строку с начальной версией программного продукта, и название программного продукта. Строка с начальной версией имеет вид "1.0.0". Первое число - это Major-версия, второе - Minor-версия, и третье - Patch. Нужно сохранить имя программного продукта в поле класса `productName`, а major, minor, patch - в соответствующие ПРИВАТНЫЕ поля. Также реализуем метод `getCurrentVersion`, который должен возвращать строку вида "Software PRODUCT_NAME, release MAJOR.MINOR.PATCH. All rights reserved."
*/

class VersionsControl {
    #major;
    #minor;
    #patch;

    #versionsHistory = [];

    constructor(initialRevision, productName) {
        const revisionParts = initialRevision.split('.');
        this.productName = productName;
        this.#major = Number.parseInt(revisionParts[0], 10);
        this.#minor = Number.parseInt(revisionParts[1], 10);
        this.#patch = Number.parseInt(revisionParts[2], 10);
    }

    major() {
        this.#versionsHistory.push( [this.#major, this.#minor, this.#patch] );
        this.#major++;
        this.#minor = 0;
        this.#patch = 0;
    }

    minor() {
        this.#versionsHistory.push( [this.#major, this.#minor, this.#patch] );
        this.#minor++;
        this.#patch = 0;
    }

    patch() {
        this.#versionsHistory.push( [this.#major, this.#minor, this.#patch] );
        this.#patch++;
    }

    getCurrentVersion() {
        return `Software ${this.productName}, release ${this.#major}.${this.#minor}.${this.#patch}. All rights reserved.`;
    }
}

const nyProd = new VersionsControl('1.2.3', 'MySoft');
console.log(nyProd.getCurrentVersion())
nyProd.patch();
console.log(nyProd.getCurrentVersion());
nyProd.major();
console.log(nyProd.getCurrentVersion())

/*
10. Добавляем функциональности. Реализуем методы:
 - `major` - увеличить major на 1, а в minor и patch поставить 0.
 - `minor` - увеличить minor на 1, а в patch поставить 0.
 - `patch` - увеличить patch на 1.
 */

 /*
 11. Реализуем возможность истории версий. Нам нужно вести историю версий, т.е. при каждом изменении версии (вызове метода major, minor, patch) сохранять текущую версию.
 */

 /*
 12. Реализуем метод `rollback` - то есть откат к предыдущей версии.
 */