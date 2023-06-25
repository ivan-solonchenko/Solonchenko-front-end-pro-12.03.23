const data = {
    'Фрукти': ['Яблука', 'Банани', 'Апельсини'],
    'Овочі': ['Помідори', 'Огірки', 'Морква'],
    'Напої': ['Кава', 'Чай', 'Сік'],
};

const categoryElements = document.getElementsByClassName('category');
const productListElement = document.getElementById('product-list');
const productDetailsElement = document.getElementById('productDetails');
const buyButton = document.getElementById('buy-button');
const orderForm = document.getElementById('orderForm');
let selectedProduct;

function showProducts(category) {
    productListElement.innerHTML = '';
    const products = data[category];
    products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.innerText = product;
        productListElement.appendChild(listItem);
        selectedProduct = product;
    });
}

Array.from(categoryElements).forEach((element) => {
    element.addEventListener('click', (event) => {
        const category = event.target.textContent;
        showProducts(category);
        productInfo.style.display = 'block';
        products.style.display = 'block';
        orderForm.style.display = 'none';
        orderForm.reset();
    });
});

productListElement.addEventListener('click', (event) => {
    const product = event.target.textContent.toLowerCase();
    productDetailsElement.textContent = 'Ви обрали: ' + product;
    orderForm.style.display = 'none';
    orderForm.reset();
});

buyButton.addEventListener('click', () => {
    document.getElementById('orderForm').style.display = "block";
});

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (orderForm.checkValidity() !== false) {
        const quantity = document.getElementById('quantity').value;
        const deliveryBranch = document.getElementById('deliveryBranch').value;

        alert(`Ви купили товар - ${selectedProduct.toLowerCase()}: ${quantity} шт.\nВідділення Нової пошти для надсилання: ${deliveryBranch}.\nДякуємо за покупку!`);
    }

    orderForm.reset();
    productDetailsElement.innerText = '';
    productInfo.style.display = 'none';
    products.style.display = 'none';
    orderForm.style.display = 'none';
});