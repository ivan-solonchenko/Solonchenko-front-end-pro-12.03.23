//todo first exercise
let userName = prompt('Як вас звати?', '');
let userSurname = prompt('Напишіть своє прізвище!', '');
let userAge = prompt('Скільки вам років?');

alert('Ім\'я користувача: ' + userName + '. Прізвище користувача: ' + userSurname + '. Користувачу: ' + userAge + ' років.');

//another option
//alert(`Ім'я користувача: ${userName}. Прізвище користувача: ${userSurname}. Користувачу: ${userAge} років.`)



//todo second exercise
let number = 12345;

console.log(number.toString().split('').join(' '));