const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    let newArr = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] === item) {
            continue;
        }
        newArr.push(array[i]);
    }
    return newArr;
}

const newArr = removeElement(array, 5 );
console.log(newArr);