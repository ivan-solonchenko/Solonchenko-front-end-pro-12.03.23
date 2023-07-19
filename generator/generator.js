//todo Звичайний генератор

// function* numberGenerator() {
//     let num = 1;
//     while (true) {
//         yield num;
//         num++;
//     }
// }
//
// const generator = numberGenerator();
//
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

//todo Фібоначі генератор
//
// function* fibonachiGeneretor() {
//     let prev = 0;
//     let curr = 1;
//
//     while (true) {
//         const next = prev + curr;
//         yield next;
//         prev = curr;
//         curr = next;
//     }
// }
//
// const generator = fibonachiGeneretor();
//
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

//todo Асинхронний генератор

function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function* asynkGenerator() {
    yield 'Start';
    await delay(1000);
    yield 'Middle';
    await delay(1000);
    yield 'End';
    await delay(1000);
}

const gen = asynkGenerator();

//IIFE
(async () => {
    for await (const value of gen) {
        console.log(value);
    }
})()