//HW_15
// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
//
// У міру змін виводити вміст масиву на сторінку.


// заповнюємо масив
let length = prompt("Введіть довжину масиву:");
let arr = [];

for (let i = 0; i < length; i++) {
    let element = prompt("Введіть елемент масиву:");
    arr.push(element);
}
console.log(arr);

// сортуємо масив за зростанням
arr.sort((a, b) => a - b);
console.log('Масив після сортування: ',  arr);

// видаляємо елементи з 2 по 4 (включно)
arr.splice(1, 3);
console.log('Масив після видалення: ', arr);







