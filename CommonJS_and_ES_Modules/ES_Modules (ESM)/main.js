// //TODO Імпорт конкретних функцій з модуля
// import  { add, substract } from './math.js';
//
// console.log(add(2, 3));
// console.log(substract(5, 2));

// //TODO Імпорт модуля зі змінною
//
// import  * as math from './math.js';
//
// console.log(math.add(2, 3));
// console.log(math.substract(5, 2));

//TODO Імпорт та перейменування

import  { add as addition, substract } from './math.js';

console.log(addition(2, 3));
console.log(substract(5, 2));