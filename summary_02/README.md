## Практическое занятие №2

### Тема: CSS Flexbox. Media-запросы.

Репозитарий содержит материалы по практическому занятию №2, посвященному работе с CSS Flexbox и медиа-запросами (адаптивностью).

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия
В процессе занятия, предполагается сначала разобрать работу CSS Flexbox на наглядном макете (цветные квадраты, которые будут позиционироваться). Далее, перейдем к верстке карточек товаров интернет-магазина. И впоследствии, сделаем макет адаптивным.
1. CSS Flexbox basics
  - на странице есть контейнер с цветными квадратами, они размещены один под другим. Нужно разместить в одну строку.
  - выровнять квадраты по центру (чтобы квадраты были в центре контейнера)
  - выровнять квадраты - сделать так, чтобы незанятое пространство в контейнере равномерно распределялось между квадратами (но не между квадратами и рамками контейнера)
  - выровнять так, чтобы незанятое пространство равномерно распределялось между квадратами И между квадратами и рамками контейнера.
  - добавить высоту контейнеру (400 пикселей).
  - выровнять квадраты по вертикали - по центру
  - выровнять квадраты по вертикали - по нижнему краю.
2. CSS Flexbox. Перенос строки
  - убрать высоту контейнера
  - добавить еще 4 квадрата в контейнер. Сделать так, чтобы квадраты переносились на след.строку, если не помещаются в одну.
3. CSS Flexbox. Размеры элементов
  - оставить в контейнере только 3 квадрата.
  - в стилях, в классе `box`, убрать явно заданную ширину (`width`).
  - установить желаемый размер квадрата по основной оси - 100 пикселей.
  - сделать так, чтобы квадраты заполняли все пространство.
4. CSS Flexbox. Параметры flex item.
  - ширину контейнера выставить 700 пикселей.
  - запретить переход на новую строку в контейнере
  - оставить в контейнере 3 квадрата.
  - сделать им желаемую ширину 300 пикселей.
  - сделать так, чтобы первый и третий квадраты были максимально возможной ширины, за счет уменьшения размеров 2-го квадрата.
5. Верстаем первую карточку товара. Товар у нас имеет название, категорию, цену, краткое описание, и изображение.
  - работаем в классе `product-card`
  - карточка имеет закругленные углы (10 пикселей)
  - внутренние отступы - 10 пикселей
  - цвет фона - белый
  - тень - 5px 5px 15px
  - изображение рендерим как квадрат (свойство `aspect-ratio: 1 / 1`)
  - под изображением, размещено название товара. Размер шрифта - 16 пикселей, цвет - `#0096CD`, начертание - жирное.
  - под изображением, размещена строка с категорией и ценой товара. Сделать так, чтобы категория была в левом углу строки, а цена - в правом.
  - под строкой с ценой и категорией идет блок описания товара.
  - максимальная ширина карточки товара - 300 пикселей.
6. Добавляем несколько товаров в контейнер (можно скопировать). Требования к контейнеру:
  - товары отображаются в виде сетки из 5 элементов.
  - промежутки между карточками товаров - 10 пикселей.
  - перенос строк разрешен.
  - карточки товаров должны иметь равную высоту, вне зависимости от высоты контента.
7. Добавляем адаптивность. Наша задача:
  - на смартфонах (до 375 пикселей ширины), товары рендерятся по одному в строку
  - на больших смартфонах (376-520 пикселей), товары рендерятся по 2 в строку
  - на планшетах (521-720) - по 4.
  - все что больше - по 5.
8. Добавляем интерактив.
  - при наведении курсора на карточку товара, курсор меняется на "указатель"
  - при наведении курсора на карточку товара, меняем цвет названия товара на `blue`. Делаем это плавно (с задержкой)
9. Работаем с позиционированием.
  - добавить одному товару класс `unavailable` (недоступен)
  - при наведении на карточку такого товара, поверх карточки должно появляться сообщение на белом фоне "К сожалению, товар недоступен".
  - "закрашивать" поверх карточки полупрозрачным серым фоном (`rgba(0,0,0,0.5)`), и поверх него (выровнять по центру) показывать сообщение из предыдущего пункта


### Полезные ссылки
 - Русскоязычный гайд по [флексам](https://medium.com/@stasonmars/%D0%B2%D0%B5%CC%88%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0-flexbox-%D0%B2-css-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B8%CC%86-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-e26662cf87e0)
 - Подробный гайд по [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - англ.
