console.log('task 1')
let myArr = ['Київ', 5, 'BMW', 'Іван', 38, 12]

let sum = 0;
let count = 0;

for (let i = 0; i < myArr.length; i++) {
    if (typeof(myArr[i]) === 'number') {
    sum += myArr[i];
    count++;
    }
}

let result = sum / count;
console.log('Cереднє арифметичне числових елементів даного масиву:', result);



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




console.log('task 3')

const mainLength = parseInt(prompt('Введіть довжину основного масиву:'));
const innerLength = parseInt(prompt('Введіть довжину внутрішніх масивів:'));
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

