//Test1
// test('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// })


//Test2 require from script.js
const { add } = require('./script')

describe('add', () => {
    test('add two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    })

    test('add negative and positive numbers', () => {
        expect(add(-2, 8)).toBe(6);
    })
})

