## Практическое занятие №9

### Тема: Работа с DOM.

Репозитарий содержит материалы по практическому занятию №9, посвященному работе с DOM.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия
На сегодняшнем занятии, нам предстоит сделать функциональность "списка дел". То есть, нам нужно создать веб-приложение, в котором мы будем составлять список дел. У каждого дела есть заголовок, краткое описание, статус (выполнено/не выполнено), и приоритетность (1-5, где 1 - минимальная, 5 - максимальная приоритетность). Список дел будет в виде обычного списка, каждое дело будет рисоваться в виде карточки. Нужно реализовать следующие базовые функции:
 - добавление дела
 - отметка дела как выполненного
 - снятие отметки с дела
 - удаление дела из списка

При этом, добавление дела нам нужно реализовать через модальное окно. То есть, открывать форму добавления нового дела. На форму нам предстоит также добавить валидацию, чтобы не добавлять всякую ерунду.
При создании блоков, рекомендуется им ставить id и классы такие же, как указано в задачах. Например, задача 1 - для контейнера заголовка ставим класс todoHeader, и ID такой же.

1. Создаем разметку нашей страницы. У нас будет блок заголовка (id=class=`todoListHeader`), в котором будут название приложения "Список добрых дел" (id=class=`todoListHeaderText`), и кнопка "Добавить" (id=`addTodo`, class=`button`). Под ним идет контейнер с собственно списком дел (id=class=`todoListContainer`).
2. Пишем функцию для рендера карточки списка добрых дел (`renderTodo`). Она принимает в качестве аргумента объект, который содержит данные нашего дела. Ее задача - создать и вернуть DOM-элемент (ТОЛЬКО СОЗДАТЬ, но не добавлять в DOM!). Кнопку удаления (красную кнопку в правом верхнем углу) пока не рисуем.
 - контейнер дела - `todoContainer`
 - заголовок дела - id не ставим, класс - `todoHeader`
 - описание дела - id не ставим, класс - `todoDescription`
 - статус дела - id не ставим, класс - `todoStatus`
 - чекбокс на правой стороне никак не стилизуем, используем обычный input type='checkbox'
3. Пишем функцию для рендера массива дел (`renderTodos`). Нам нужно пройтись по нашему массиву дел (`todosArray`), для каждого элемента вызвать функцию `renderTodo`. Она нам создаст DOM-элемент, который надо будет добавить в контейнер дел (`todoListContainer`).
4. Добавляем кнопку удаления дела из списка (это делаем в функции `renderTodo`). Она должна располагаться "поверх" карточки товара - в этом нам поможет абсолютное позиционирование.
5. Пишем функциональность по удалению дел - создаем функцию `dropTodoFunction`. Она должна принимать в аргументе ИД дела, и удалять из массива `todosArray` дело с таким ИД. Также, после удаления, эта функция должна вызывать `renderTodos`, чтобы отрисовать новый список дел.
6. Добавляем обработчик клика на нашу кнопку удаления из списка. При клике нужно вызвать функцию `dropTodoFunction` с ИД текущего дела.
7. Теперь добавляем функциональность отметки дела как "Выполнено/Не выполнено". Нам нужно добавить обработчик на событие `onchange` нашего чекбокса. Если в нем стоит отметка - то в соответствующем объекте нашего массива нужно в свойство `isCompleted` записать true. Иначе - записать false.
8. Пора добавить функциональность добавления дел. Рисуем форму для добавления дела (в HTML-разметке). Пока что разместим ее в контейнере (div, id=class=`addTodoFormContainer`), у которого макс.ширина - 400 пикселей. Форма содержит инпуты для ввода заголовка, описания и приоритетности дела, а также кнопки "Добавить" (id=`addTodoFormOk`, class=`button`), "Отмена" (id=`addTodoFormCancel`, class=`button, buttonCancel`).
9. Делаем модальное окно - то есть, нам нужно, чтобы наша форма размещалась поверх всего остального, на "сером" фоне. Нам нужно обернуть наш контейнер с формой в еще один контейнер (id=`modalContainer`, class=`modalContainer`) - этот контейнер как раз для серого фона. И нужно создать стили для этого класса, которые:
 - растянут этот серый фон на весь экран, поверх остального содержимого
 - цвет фона - серый
 - фон - полупрозрачный (рекомендуется НЕ использовать opacity, а задать background-color через rgba)
 - по умолчанию этот контейнер скрытый
10. Добавляем функциональность открытия модального окна. При клике на кнопку `addTodo` (из п.1), нам нужно показывать наш `modalContainer`. Рекомендуется сделать две функции, `showModal`, `hideModal`, которые будут это показывать/прятать.
11. Нам нужно, чтобы при клике ВНЕ нашего окна наше диалоговое окно скрывалось. То есть, если мы кликаем по серому фону - окно прячется. Задача с подвохом - чтобы его обойти, нужно вспомнить про всплытие событий, и про `event.target`.
12. Пишем функцию добавления дела в список `addTodoFunction`. Она должна принимать данные дела (заголовок, текст, приоритет), и добавлять его в конец массива дел. При этом, нам нужно создать ИД новому делу. Для этого, мы ищем дело с самым большим ИД, и прибавляем к его ИД единицу - это будет ИД нового дела. После добавления нового дела в массив `todosArray`, нам нужно перерисовать список дел (вызвать функцию `renderTodos`)
13. Добавляем обработчик клика на кнопку "Добавить" в нашей форме. При клике на нее, нам нужно собрать значения из инпутов, вызвать функцию `addTodoFunction`, и закрывать модальное окно.
14. Добавляем валидацию. Теперь, перед вызовом функции `addTodoFunction`, нам нужно проверить что значения инпутов непустые. Если пустые - подсвечиваем соответствующий инпут красным (добавляем ему класс error-input), модалку не закрываем, и функцию `addTodoFunction` не вызываем.

### Полезные ссылки
 - [Селекторы](https://learn.javascript.ru/searching-elements-dom) - отличный и наглядный русскоязычный материал по поиску элементов в DOM.
 - [Продвинутые селекторы](https://learn.javascript.ru/css-selectors) - рекомендуется как "дополнительная информация", после усвоения материала из ссылки "Селекторы".
 - [Всплытие событий](https://learn.javascript.ru/bubbling-and-capturing) - максимально полезная информация по всплытию событий, настоятельно рекомендуется к прочтению.