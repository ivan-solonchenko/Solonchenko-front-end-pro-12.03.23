const parentElement1 = document.getElementById('list1');
const parentElement2 = document.getElementById('list2');
const array1 = [1, 2, 3];
const array2 = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array, parentElement) {
    let ul = document.createElement('ul');

    array.forEach((element) => {
        let li = document.createElement('li');

        if (Array.isArray(element)) {
            generateList(element, li);
        } else {
            li.textContent = element;
        }

        ul.appendChild(li);
    });

    parentElement.appendChild(ul);
}

generateList(array1, parentElement1);
generateList(array2, parentElement2);