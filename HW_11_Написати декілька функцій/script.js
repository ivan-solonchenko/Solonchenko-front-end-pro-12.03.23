console.log('task 1')
const myArr = new Array('Київ', 2, 'BMW', 18, 'Іван', 10);

const calculateAverage = function (arr) {
    let sum = 0;
    let count = 0;
    let result;

    for (let i = 0; i < arr.length; i++) {
        if (typeof(myArr[i]) === 'number') {
        sum += myArr[i];
        count++;
        }
        result = `Cереднє арифметичне числових елементів даного масиву: ${sum / count}`;
        if (typeof(myArr[i]) !== 'number') {
            result = 'Масив не містить числових значень!';
        }
    }
    console.log(result);
}

calculateAverage(myArr);



console.log('task 2')

const x = parseInt(prompt('Введіть перше число: '));
const y = parseInt(prompt('Введіть друге число: '));
const znak = prompt('Введіть знак операції (+, -, *, /, %, ^): ');

function doMath(x, znak, y) {
    let result;

    if (isNaN(x) !== true && isNaN(y) !== true) {
        switch (znak) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = x / y;
                break;
            case '%':
                result = x % y;
                break;
            case '^':
                result = x ** y;
                break;
            default:
                result = 'Некоректний знак операції';
        }
    } else {
        result = 'ви ввели не число';
    }

    alert(`Результат: ${result}`);
}

doMath(x, znak, y);



console.log('task 3')

const mainLength = prompt('Введіть довжину основного масиву:');
const innerLength = prompt('Введіть довжину внутрішніх масивів:');
const value = prompt('Введіть значення елементів масиву:');



function fillArray(mainLength, innerLength, value) {

    const arr = [];

    if (isNaN(mainLength) || isNaN(innerLength)) {
        return 'Ви ввели невірне число!';
    } else {
        for (let i = 0; i < mainLength; i++) {
            const innerArr = [];
            for (let j = 0; j < innerLength; j++) {
                innerArr.push(value);
            }
            arr.push(innerArr);
            return arr;
        }
    }
}

const myArray = fillArray(mainLength, innerLength, value);
console.log(myArray);



console.log('task 4')

 const removeChars = function (str, chars) {
    for (let i = 0; i < chars.length; i++) {
        str = str.split(chars[i]).join('');
    }

    console.log(str);
}

removeChars ('hello world', ['l', 'd']);


