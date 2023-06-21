const data = {
    'Фрукти': ['Яблука', 'Банани', 'Апельсини'],
    'Овочі': ['Помідори', 'Огірки', 'Морква'],
    'Напої': ['Кава', 'Чай', 'Сік'],
};

const categoryElements = document.getElementsByClassName('category');
const products = document.getElementById('products');
const productListElement = document.getElementById('product-list');
const productInfo = document.getElementById('product-info');
const productDetailsElement = document.getElementById('product-details');
const buyButton = document.getElementById('buy-button');

function showProducts(category) {
    productListElement.innerHTML = '';
    const products = data[category];
        products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.innerText = product;
        productListElement.appendChild(listItem);
    });

}

Array.from(categoryElements).forEach((element) => {
    element.addEventListener('click', (event) => {
        const category = event.target.innerText;
        showProducts(category);
        productInfo.style.display = 'block';
        products.style.display = 'block';
    });
});

productListElement.addEventListener('click', (event) => {
    const product = event.target.innerText;
    productDetailsElement.innerText = 'Ви обрали: ' + product;
});

buyButton.addEventListener('click', ( ) => {
    alert('Товар куплений');
    productDetailsElement.innerText = '';
    productListElement.innerHTML = '';
    productInfo.style.display = 'none';
    products.style.display = 'none';
});