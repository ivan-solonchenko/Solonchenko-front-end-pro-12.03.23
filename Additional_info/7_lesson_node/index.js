setTimeout(() => {
    console.log('response');
}, 1000)

console.log('start');

const second = (x) => console.log(x);
const first = () => {
    console.log('text');
    return second(5);
}

first();

// const promise = new Promise((res, rej) => {
//     res(console.log('promise'))
// })
//
// promise.then(response => response)

console.log('end');

fetch('https://jsonplaceholder.typicode.com/todos?_page=2&_limit=5')
    // .then(json => console.log(json))
    // .then(response => {
    //     console.log('response', response);
    //     return response.json()
    // })

    // .then(response => {
    //     return response.json()
    // })
    // .then(json => {
    //     json.forEach(todo => {
    //         let div = document.createElement('div');
    //         div.innerHTML = todo.title;
    //         document.body.appendChild(div);
    //         div.style.border = "2px solid black";
    //         div.style.background = "lime";
    //     })
    //     console.log(json);
    // })

// module.exports.first = first;
//
// (function a() {
//     console.log('IIFE')
// })()

let nun = 5;
console.log(`Variable: ${nun}`)