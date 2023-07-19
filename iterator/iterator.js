//todo Ітерація масиву

// const myArray = [1, 2, 3];
// const iterator = myArray[Symbol.iterator]();
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//todo Ітерація об'єкта

// const obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }
//
// const iterator = Object.values(obj)[Symbol.iterator]();
//
// for (const element of iterator) {
//     console.log(element);
// }

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//todo Сума елементів масиву

function sumArrayElements(arr) {
    let sum = 0;
    const iterator = arr[Symbol.iterator]();

    let next = iterator.next();
    while (!next.done) {
        sum += next.value;
        next = iterator.next();
    }

    return sum;
}

const array = [1, 2, 3, 4, 5];
console.log(sumArrayElements(array));