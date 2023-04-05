function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree < 0) {
        return 1 / pow(num, -degree);
    } else {
        return num * pow(num, degree - 1);
    }
}

const num = prompt('Введіть число, яке потрібно звести в ступіть.');
const degree = prompt('Введіть ступінь.');

const result = pow(num, degree);
(isNaN(num) || isNaN(degree)) ? alert('Ви ввели не число!') : alert(`Результат: ${result}`);
