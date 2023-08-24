const testString1 = 'Test String with several spaces';

/* 1. Посчитать количество пробелов в строке `testString1`. */
function countSpaces(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') result++;
    }
    return result;
}

//console.log(countSpaces(testString1));


/* 2. В строке `testString1` заменить подстроку `String` на подстроку `Data`, вывести результат в консоль. */
let replaced = testString1.replace('String', 'Data');
// console.log(replaced);
// console.log(testString1);

/* 3. Вывести в консоль индекс первого пробела в строке `testString1`. */
const firstSpaceIndex = testString1.indexOf(' ');
//console.log(firstSpaceIndex);

/* 4. Вывести в консоль индекс ВТОРОГО пробела в строке `testString1`. */
const secondSpaceIndex = testString1.indexOf(' ', firstSpaceIndex + 1);
// Исходная строка: 'Test String with several spaces'
// firstSpaceIndex = 4
// testString1.indexOf(' ', firstSpaceIndex):
// будет искать в строке ' String with several spaces'
// testStrin1.indexOf(' ', firstSpaceIndex + 1);
// будет искать в строке 'String with several spaces'
//console.log(secondSpaceIndex);

/* 5. Пишем функцию `relpaceMiddle`. Функция принимает 2 аргумента: строку-источник, которая содержит как минимум 2 пробела, и строку-заменитель. Нужно заменить в строке-источнике подстроку между первым и вторым пробелами на строку-заменитель. То есть, нам нужно найти эту подстроку в строке-источнике, и заменить ее на заменитель.
*/
// replaceMiddle(testString1, 'DUMMY'); // 'Test String with several spaces'
// 'TestDUMMYwith several spaces'

function replaceMiddle(str, replacer) {
    const firstSpaceIndex = str.indexOf(' ');
    const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
    const strToReplace = str.slice(firstSpaceIndex, secondSpaceIndex + 1);
    const result = str.replace(strToReplace, replacer);
    return result;
}

// console.log(replaceMiddle('Test for test', 'DUMMY'));

/*6. Пишем функцию `upperCaseFirst`. Задача функции - принять строку, и вернуть строку, у которой первая буква заменена на заглавную.
Пример: `upperCaseFirst('small') -> Small`*/

function upperCaseFirst(str) {
    // slon
    // str[0].toUpperCase() = 'S'
    // str.slice(1) = 'lon'
    return str[0].toUpperCase() + str.slice(1);
}

// console.log(upperCaseFirst('slon'))

/*
7. Пишем функцию `fixUpperCase`. Она принимает строку (слово), в котором неверен регистр букв. Нужно вернуть это слово, у которого только первая буква в верхнем регистре, а остальные - в нижнем. Пример:
```
fixUpperCase('moGiLev'); // Result: Mogilev;
```
*/

function fixUpperCase(str) {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return result;
}

// console.log(fixUpperCase('moGiLev'));

/*
8. Пишем функцию spaces2CamelCase. Наша задача - заменить строку вида `test string with spaces` на строку `testStringWithSpaces`.
*/
function spaces2CamelCase(str) {
    let result = "";
    let array = str.split(' ');
    array.forEach( item => {
        result = result + item[0].toUpperCase() + item.slice(1);
    });
    return result[0].toLowerCase() + result.slice(1);
}

// console.log(spaces2CamelCase('test string for camel case'))

/*
9. Пишем функцию `upperCaseSentence`. Функция принимает строку, и задача - заменить в каждом слове этой строки первую букву на заглавную. Словом считается строка между пробелами. Пример:
```
upperCaseSentence('This is a simple sentence');
// Result: This Is A Simple Sentence
```
Подсказка: здесь нам может помочь метод `split`.
*/
function upperCaseSentence(str) {
    const arr = str.split(' ');
    return arr.map( item => item[0].toUpperCase() + item.slice(1) ).join(' ');
}

// console.log(upperCaseSentence('test string for upper case'));

/*
10. Пишем функцию `reverseSentence` - она принимает на вход строку, и должна ее "развернуть" - вывести слова строки в обратном порядке. Пример:
```
reverseSentence('Here is the test data');
// Result: data test the is Here
```
*/
function reverseSentence(str) {
    const array = str.split(' ');
    return array.reverse().join(' ');
}
// console.log(reverseSentence('test string here'));

/*
11. `countVovels`. Мы должны написать функцию `countVovels`, которая принимает на вход строку, и в строке подсчитает количество гласных букв. Гласными буквами являются: `a,e,y,u,i,o`.
[...arr]
*/
function countVovels(str) {
    const vovels = 'aeiouy';
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vovels.indexOf(str[i]) >= 0) {
            count++;
        }
    }
    return count;
}

console.log(countVovels('camleCase'))
