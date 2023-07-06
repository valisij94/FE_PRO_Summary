## Практическое занятие №6

### Тема: Работа с функциями. Повторение ранее пройденного.

Репозитарий содержит материалы по практическому занятию №6, посвященному работе с методами массивов и повторению ранее пройденного.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия

1. Повторение работы с массивами. Работаем с разными методами массивов.
 - посчитать сумму элементов массива numbers. Сделаем это двумя способами:
    - через перебор массива (`forEach`)
    - с использованием метода массивов `reduce`
 - из массива `numbers` получить новый массив, `evenNumbers`, который состоит только из четных элементов массива `numbers`. Также сделать двумя способами:
    - через `forEach`
    - с использованием метода массивов `filter`
 - получить из массива `numbers` новый массив, который будет содержать только те элементы, которые делятся на 5, и при этом четные. Здесь нам тоже поможет метод `filter`.
 - получить из массива products массив, который будет содержать только наименования товаров (ожидаемый результат - `['Ball', 'Gloves', 'Sport Shoes', 'Hammer', 'Saw', 'Shark toy']`). Нам поможет метод `map`.
 - получить из массива products массив объектов, которые содержат только название и цену товара. То есть, объект товара "превращается" в объект, у которого есть только свойства name, price. Нам также поможет метод `map`.
2. Метод массивов `reduce`
 - получить сумму массива numbers
 - получить суммарную стоимость всех товаров массива products
 - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
 - получить объект, в котором будут категории товаров.
 - получить объект, в котором будут суммарные стоимости товаров по категориям.
3. Задача "со звездочкой". Вывести в консоль тексты всех параграфов на странице. Для этого, нам нужно воспользоваться методом `querySelectorAll`, который нам возвращает объект, по которому можно пройтись циклом.
4. Работа с функциями.
 - пишем функцию-калькулятор `calculator`. Она должна принимать на вход 3 аргумента: число, число, и операцию, которую мы выполняем. В зависимости от 3-го аргумента, выполняем арифметические операции. Доступные операции - "+", "-", "*", "/". Если передана любая другая операция (или не передана вообще), пишем в консоль сообщение "Неизвестная операция!", и возвращаем `NaN`.Примеры вызова:
 ```
 calculator(1, 3, '+'); // 4
 calculator(5, 3, '-'); // 2
 calculator(2, 5, '*'); // 10
 calculator(9, 3, '/'); // 3
 calculator(2, 3, '&'); // NaN
 ```
 5. Пишем функцию, которая принимает в качестве аргумента массив товаров (`products`), и возвращает объект со следующими свойствами:
  - totalAmount - общая стоимость всех товаров
  - totalCount - количество всех товаров.
6. Дорабатываем функцию из п.5. Теперь функция принимает вторым аргументом категорию товара. И нам нужно вернуть объект с общей стоимостью и общим количеством товаров только этой категории.
7. Пишем функцию `isLowPrice`. Она принимает в аргументе объект товара. Должна вернуть `true`, если цена товара (свойство price) меньше 150, и вернуть `false` в противном случае.
8. Получить из массива `products` новый массив, `lowPricedProducts`, в который попадут только те товары, для которых функция `isLowPrice` из п.7 вернет `true`. Это пример использования функции в качестве аргумента другой функции.
9. Теперь отрендрим список товаров. У нас в main.js определена функция `renderProduct`. Она ожидает на вход объект товара, создает DOM-элемент, и добавляет его на страницу (в контейнер). У нас есть массив товаров `products`. Нужно отрендерить эти товары, вызовом функции `renderProduct` для каждого элемента массива `products`. Т.е. пройтись по массиву и вызвать функцию для каждого элемента.
10. В файле main.js есть заготовка функции `renderProductsArray`. Она должна принять массив товаров, и отрендерить его (аналогично тому, что мы делали в п.9). Добавьте код, который отрендерит массив товаров туда, где это отмечено комментарием.
11. Добавляем возможность фильтрации товаров. В разметке (index.html), у выпадающего меню (select) убираем "style="display: none;". Это отобразит наше выпадающее меню. В файле main.js, у нас есть заготовка обработчика события выбора элемента в выпадающем меню (select.addEventListener). Нужно добавить сюда код, который:
 - на основе массива `products` получит новый массив товаров, у которых категория совпадает с выбранной категорией (выбранную категорию записываем в переменную `selectedCategory`).
 - отрендерит этот массив

### Полезные ссылки
 - [Циклы](https://learn.javascript.ru/while-for) и [массивы](https://learn.javascript.ru/array)
 - Ссылка на [спецификацию](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) метода push. Кроме этого, там описаны все методы массивов. Рекомендуется использовать как справочник.
 - Русскоязычный гайд по [функциям](https://learn.javascript.ru/function-basics)