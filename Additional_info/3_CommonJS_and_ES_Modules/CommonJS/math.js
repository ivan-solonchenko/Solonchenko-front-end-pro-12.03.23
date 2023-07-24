// //TODO Експорт модуля
// function add(a, b) {
//     return a + b;
// }
//
// function substract(a, b) {
//     return a - b;
// }
//
// module.exports = {
//     add: add,
//     substract: substract
// };

//TODO Експорт функцій модуля напряму
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

exports.add = add;
exports.substract = substract;
