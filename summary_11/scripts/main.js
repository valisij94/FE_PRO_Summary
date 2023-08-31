// Зедсь пока ничего нет - и нам предстоит это исправить!

/* 1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение "Delayed message", через 5 секунд после запуска скрипта. */

// const myFunc = () => {
//     console.log('Delayed message')
// };
// setTimeout( myFunc, 5000);

/*
2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
*/

// const delayInput = document.querySelector('#delayTime');
// const delayBtn = document.querySelector('#delayStart');

// delayBtn.addEventListener('click', () => {
//     const delayTime = delayInput.value;
//     if (delayTime) {
//         setTimeout( () => {
//             console.log('Delayed by ' + delayTime);
//         }, delayTime * 1000);
//     }
// });

/*3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
 - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
 - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
 - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.
 */

// const delayInput = document.querySelector('#delayTime');
// const delayBtnStart = document.querySelector('#delayStart');
// const delayBtnStop = document.querySelector('#delayStop');

// delayBtnStop.style.display = 'none';

// let timerId;

// delayBtnStart.addEventListener('click', () => {
//     const delayTime = delayInput.value;
//     if (delayTime) {
//         delayBtnStop.style.display = 'block';
//         timerId = setTimeout( () => {
//             console.log('Delayed message ' + delayTime);
//             delayBtnStop.style.display = 'none';
//         }, delayTime * 1000);
//     }
// });

// delayBtnStop.addEventListener('click', () => {
//     clearTimeout(timerId);
//     delayBtnStop.style.display = 'none';
// });

/*
4. Работаем с другой асинхронной операцией. Наша задача - каждые 5 секунд выводить в консоль сообщение "Прошло 5 секунд".
*/

// setInterval( () => {
//     console.log('5 seconds');
// }, 5000);

/*
5. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).
*/

// const timerParagraph = document.querySelector('#timer');

// const updateTime = () => {
//     const now = new Date();
//     timerParagraph.textContent = now.toLocaleString();
// }

// updateTime();
// setInterval(updateTime, 1000);

/*
6. Реализуем простой секундомер. Нужно добавить в разметку блок с текстом "Simple Timer". В блоке будут:
 - параграф, в котором будем выводить текущее время секундомера
 - кнопка "Старт" - при нажатии запускаем секундомер
 - кнопка "Сброс" - при нажатии сбрасываем секундомер.
 */

const startTimer = document.querySelector('#startTimer');
const stopTimer = document.querySelector('#stopTimer');
const resumeTimer = document.querySelector('#resumeTimer');
const pauseTimer = document.querySelector('#pauseTimer');
const timerValueParagraph = document.querySelector('#timerValue');

let timerValue = 0;
let intervalId;

const startTimerFunction = () => {
    intervalId = setInterval( () => {
        timerValue++;
        timerValueParagraph.textContent = timerValue;
    }, 1000);
}

const pauseTimerFunction = () => {
    clearInterval(intervalId);
}

const stopTimerFunction = () => {
    clearInterval(intervalId);
    timerValue = 0;
    timerValueParagraph.textContent = 0;
}

startTimer.addEventListener('click', startTimerFunction);
stopTimer.addEventListener('click', stopTimerFunction);
resumeTimer.addEventListener('click', startTimerFunction);
pauseTimer.addEventListener('click', pauseTimerFunction);

/* 7. Усложняем наш секундомер. Нам нужно добавить кнопки "Пауза", "Возобновить". Первая будет приостанавливать, но не сбрасывать секундомер, а вторая - возобновлять его работу.
*/

/*
8. Пишем функцию `delayedDecoraror`. Она должна принять в качестве аргументов другую функцию (колбэк), и время задержки. Нужно вызвать функцию-колбэк через время задержки.
*/

// const delayedDecoraror = (callback, delayTime) => {
//     setTimeout( callback, delayTime );
// }

// const test = () => console.log('Test function');

// delayedDecoraror(test, 2000);

/* 12. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://fakestoreapi.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
*/

// const res = fetch('https://fakestoreapi.com/products/categories');


// const parsedResp = res.then( response => {
//     console.log('Resp instance', response);
//     response.json()
// })

// parsedResp.then( responseJson => console.log('response', responseJson));
