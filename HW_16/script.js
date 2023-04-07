//HW_16
// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// 2.Знайти мінімальний елемент масиву та його порядковий номер.
// 3.Знайти максимальний елемент масиву та його порядковий номер.
// 4.Визначити кількість негативних елементів.
// 5.Знайти кількість непарних позитивних елементів.
// 6.Знайти кількість парних позитивних елементів.
// 7.Знайти суму парних позитивних елементів.
// 8.Знайти суму непарних позитивних елементів.
// 9.Знайти добуток позитивних елементів.
// 10.Знайти найбільший серед елементів масиву, інші обнулити.


const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1.Знаходимо суму та кількість позитивних елементів
let sumPositive = 0;
let countPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumPositive += arr[i];
        countPositive++;
    }
}
console.log('Сума позитивних елементів: ', sumPositive);
console.log('Кількість позитивних елементів: ', + countPositive);



// 2.Знаходимо мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minElementIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minElementIndex = i;
    }
}

console.log('Мінімальний елемент масиву:', minElement);
console.log('Порядковий номер мінімальнго елементу:', minElementIndex);


// 3.Знаходимо максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxElementIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxElementIndex = i;
    }
}

console.log('Максимальний елемент масиву:', maxElement);
console.log('Порядковий номер максимального елементу:', maxElementIndex);


// 4.Визначаємо кількість негативних елементів.
let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0)
        countNegative++;
}

console.log('Кількість негативних елементів:', countNegative);

// 5.Знайти кількість непарних позитивних елементів.
let countOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0)
        countOddPositive++;
}

console.log('Кількість непарних позитивних елементів:', countOddPositive);

// 6.Знайти кількість парних позитивних елементів.
let countEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0)
        countEvenPositive++;
}

console.log('Кількість парних позитивних елементів:', countEvenPositive);


// 7.Знайти суму парних позитивних елементів.
let sum2 = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] % 2 === 0)
        sum2 += arr[i];
}

console.log('Cуму парних позитивних елементів:', sum2);

// 8.Знайти суму непарних позитивних елементів.
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] % 2 !== 0)
        sum += arr[i];
}

console.log('Cуму непарних позитивних елементів:', sum);


// 9.Знайти добуток позитивних елементів.
let product = 1;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0)
        product *= arr[i];
}

console.log('Добуток позитивних елементів:', product);

// 10.Знайти найбільший серед елементів масиву, остальні обнулити
let max = arr[0];

for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max)
        max = arr[i];
}

for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== max)
        arr[i] = 0;
}

console.log(arr);
