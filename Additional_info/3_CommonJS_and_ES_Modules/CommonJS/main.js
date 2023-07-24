// const math = require('./math');
//
// console.log(math.add(2, 3));
// console.log(math.substract(5, 2));

//TODO Імпорт конкретних функцій з модуля (новіша конструкція ніж перша)
const  { add, substract } = require('./math');

console.log(add(2, 3));
console.log(substract(5, 2));