"use strict";

//@babel/preset-env
//@babel/preset-react
//@babel/preset-typescript

//Створення нового transpiled.js
//npx babel index.js -o transpiled.js

var message = 'Hello, World';
console.log(message);
var multiply = function multiply(a, b) {
  return a * b;
};
console.log(multiply(2, 3));
