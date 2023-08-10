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

/* создать переменную `demoButton`, и записать в нее ссылку на кнопку с ID=demoButton */
const demoButton = document.querySelector('#demoButton');
/* добавить к кнопке класс `button` */
//demoButton.className = 'button';
demoButton.classList.add('button');
// ...
//demoButton.className = 'button-disabled';
/* создать переменную `demoInputs`, и записать в нее ссылку на все инпуты на странице. */
const demoInputs = document.querySelectorAll('input');
// теперь переменная demoInputs содержит список всех инпутов на странице

/* для всех инпутов добавить класс `input` */
// for (let i = 0; i < demoInputs.length; i++ ){
//     demoInputs[i].classList.add('input');
// }
demoInputs.forEach( input => {
    input.classList.add('input');
});

/* сделать инпут с классом `styledInput` "закрытым" для ввода. Для этого нам понадобится использовать атрибут `disabled` */
const styledInput = document.querySelector('.styledInput');
styledInput.setAttribute('disabled', true);
styledInput.removeAttribute('disabled');
//styledInput.disabled = true;

/* 2. Добавляем на кнопку обработчик клика. Задача обработчика - вывести в консоль текст "Кнопка нажата!". */
// demoButton.addEventListener('click', () => {
//     console.log('Pressed')
// });

/* 3. Изменяем наш обработчик. Теперь, задача нашего обработчика - управлять классом `input` у инпута с ID=nameInput. Нужно, если у инпута есть класс `input` - то удалять этот класс, а если его нет - то добавлять. Для этого есть специальный метод у свойства `classList`.
*/
const nameInput = document.querySelector('#nameInput');
demoButton.addEventListener('click', (event) => {
    nameInput.classList.toggle('input');
});

/*
4. Добавляем обработчик на событие ввода (`keydown`) в наш инпут с ID=nameInput. Нужно, чтобы при нажатии на клавишу, в консоль выводилось сообщение `key pressed!`
*/
// nameInput.addEventListener('keydown', () => {
//     console.log('Key pressed!');
// });

/*
5. Усложняем обработчик из п.4. Теперь нужно в консоль выводить такое: `Current input value is: ЗНАЧЕНИЕ_ИНПУТА`. Здесь нам нужно работать с объектом Event, который ожидается первым аргументом в нашей функции.
*/
/**
 * когда мы отпускаем клавишу, браузер генериурет объект события. И в нашем обработчике,
 * ссылка на этот объект будет записана в event
 */
nameInput.addEventListener('keyup', (myEvent) => {
    // myEvent.target === nameInput
    console.log('Current input value is: ' + myEvent.target.value);
});

/* 6. Делаем валидацию, проверяем что инпут с именем (Name) содержит строку более чем из 3 символов. Добавляем на событие `focusout` обработчик, который проверит значение инпута. Если длина текста меньше 3 символов - добавляем инпуту класс `error-input`. Иначе - удаляем этот класс.
*/
nameInput.addEventListener('focusout', (event) => {
    if (event.target.value.length < 3) {
        event.target.classList.add('error-input');
    }
    else {
        event.target.classList.remove('error-input');
    }
});

/*
7. Добавляем валидацию для всех инпутов. Наша задача - сделать так, чтобы при нажатии на кнопку, мы проверяли все инпуты, и если инпут пустой - то применяем к нему класс `error-input`, а если непустой - то удаляем этот класс. То есть, нам добавить ЕЩЕ ОДИН обработчик на событие клика у нашей кнопки, и в нем реализовать эти проверки.
*/
demoButton.addEventListener('click', () => {
    demoInputs.forEach(input => {
        if (input.value.length === 0) {
            input.classList.add('error-input');
        }
        else {
            input.classList.remove('error-input');
        }
    });
});

/*
8. Пишем функцию, которая будет выдавать приветствие. Она должна:
 - реализовать логику из п.7 - то есть проверить все инпуты, и пометить пустые инпуты классом `error-input`
 - если все инпуты заполнены - то вывести в алерт сообщение `Hello, SURNAME NAME MIDDLENAME`, то есть поприветствовать пользователя по ФИО.
 - эта функция должна запускаться при клике на кнопку.
 */

 function clickHandler() {
    let isError = false;
    let message = 'Hello, ';
    demoInputs.forEach( input => {
        if (!input.value) {
            input.classList.add('error-input');
            isError = true;
        }
        else {
            input.classList.remove('error-input');
            message = message + input.value + ' ';
        }
    });
    if (!isError) {
        alert(message);
    }
 }
 demoButton.addEventListener('click', clickHandler);


 //
 document.body.addEventListener('click', () => {
    console.log('clicked on body');
 });
 const demoContainer = document.querySelector('div.demo-container');
 demoContainer.addEventListener('click', () => {
    console.log('clicked on div');
 });