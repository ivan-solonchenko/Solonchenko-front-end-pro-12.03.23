//HW_16
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. Знайти суму та кількість позитивних елементів.
const positiveNumbers = arr.filter(num => num > 0);
const sumOfPositive = positiveNumbers.reduce((acc, num) => acc + num, 0);
const countOfPositive = positiveNumbers.length;

console.log('Сума позитивних елементів: ', sumOfPositive);
console.log('Кількість позитивних елементів: ',countOfPositive);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const minNum = Math.min(...arr);
const indexOfMinNum = arr.indexOf(minNum);

console.log('Мінімальний елемент масиву:', minNum);
console.log('Порядковий номер мінімальнго елементу:', indexOfMinNum);

// 3. Знайти максимальний елемент масиву та його порядковий номер.
const maxNum = Math.max(...arr);
const indexOfMaxNum = arr.indexOf(maxNum);

console.log('Максимальний елемент масиву:', maxNum);
console.log('Порядковий номер максимального елементу:', indexOfMaxNum);

// 4. Визначити кількість негативних елементів.
const countOfNegative = arr.filter(num => num < 0).length;

console.log('Кількість негативних елементів:', countOfNegative);

// 5. Знайти кількість непарних позитивних елементів.
const countOfOddPositive = arr.filter(num => num > 0 && num % 2 !== 0).length;

console.log('Кількість непарних позитивних елементів:', countOfOddPositive);

// 6. Знайти кількість парних позитивних елементів.
const countOfEvenPositive = arr.filter(num => num > 0 && num % 2 === 0).length;

console.log('Кількість парних позитивних елементів:', countOfEvenPositive);

// 7. Знайти суму парних позитивних елементів.
const sumOfEvenPositive = arr.filter(num => num > 0 && num % 2 === 0).reduce((acc, num) => acc + num, 0);

console.log('Cуму парних позитивних елементів:', sumOfEvenPositive);

// 8. Знайти суму непарних позитивних елементів.
const sumOfOddPositive = arr.filter(num => num > 0 && num % 2 !== 0).reduce((acc, num) => acc + num, 0);

console.log('Cуму непарних позитивних елементів:', sumOfOddPositive);

// 9. Знайти добуток позитивних елементів.
const productOfPositive = arr.filter(num => num > 0).reduce((acc, num) => acc * num, 1);

console.log('Добуток позитивних елементів:', productOfPositive);

// 10. Знайти найбільший серед елементів масиву, інші обнулити.
const maxNummber = Math.max(...arr);
const newArr = arr.map(num => num === maxNummber ? num : 0);

console.log(newArr);