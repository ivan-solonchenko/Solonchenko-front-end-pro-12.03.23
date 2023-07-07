const data = {
    'Фрукти': ['Яблука', 'Банани', 'Апельсини'],
    'Овочі': ['Помідори', 'Огірки', 'Морква'],
    'Напої': ['Кава', 'Чай', 'Сік'],
};

const prices = {
    'Яблука': 10,
    'Банани': 15,
    'Апельсини': 12,
    'Помідори': 8,
    'Огірки': 6,
    'Морква': 4,
    'Кава': 20,
    'Чай': 5,
    'Сік': 7
};

const leftSidebar = document.getElementById('left-sidebar');
const categoriesSection = document.getElementById('categories-section');
const categoryList = document.getElementsByClassName('category');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const buyButton = document.getElementById('buy-button');
const productsSection = document.getElementById('products-section');
const productInfo = document.getElementById('product-info');
const orderForm = document.getElementById('order-form');
const ordersButton = document.getElementById('orders-button');
const shoppingCart = document.getElementById('shopping-cart-section');
let selectedProduct;

function showProducts(category) {
    const products = data[category];
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.id = 'product-list-item';
        listItem.innerText = product;
        listItem.setAttribute('product-item-index', index);
        productList.appendChild(listItem);
    });
}

Array.from(categoryList).forEach((element) => {
    element.addEventListener('click', (event) => {
        const category = event.target.textContent;
        showProducts(category);
        productsSection.style.display = 'block';
        productInfo.style.display = 'none';
        orderForm.reset();
    });
});

productList.addEventListener('click', (event) => {
    const product = event.target.textContent;
    productDetails.textContent = 'Ви обрали: ' + product.toLowerCase();
    orderForm.style.display = 'none';
    productInfo.style.display = 'block';
    orderForm.reset();
    selectedProduct = product;
});

buyButton.addEventListener('click', () => {
    orderForm.style.display = 'block';
});

function fillingForm() {
    const fullName = document.getElementById('full-name').value;
    const city = document.getElementById('city').value;
    const deliveryBranch = document.getElementById('delivery-branch').value;
    const cashOnDelivery = document.getElementById('cash-on-delivery');
    const cardPayment = document.getElementById('card-payment');
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;
    const price = prices[selectedProduct] * quantity;
    let selectedPaymentMethod;

    if (cashOnDelivery.checked) {
        selectedPaymentMethod = cashOnDelivery.value;
    }

    if (cardPayment.checked) {
        selectedPaymentMethod = cardPayment.value;
    }

    const order = {
        product: selectedProduct.toLowerCase(),
        price: price,
        orderTime: new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' }),
        city: city,
        deliveryBranch: deliveryBranch,
        cardPayment: selectedPaymentMethod,
        quantity: quantity,
        comment: comment,
        fullName: fullName,
    };

    return order;
}

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (orderForm.checkValidity()) {
        const order = fillingForm();
        saveOrder(order);

        alert(`Ви купили ${order.product}: ${order.quantity} шт.\nМісто: ${order.city}.\nВідділення Нової пошти для надсилання: ${order.deliveryBranch}.
        \nДякуємо за покупку!`);

        orderForm.reset();
        productDetails.innerText = '';
        productInfo.style.display = 'none';
        productsSection.style.display = 'none';
        orderForm.style.display = 'none';
    }
});

function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

ordersButton.addEventListener('click', () => {
    categoriesSection.style.display = 'none';
    shoppingCart.style.display = 'block';
    productInfo.style.display = 'none';
    productsSection.style.display = 'none';
    productDetails.style.display = 'none';

    showUserOrders();
});

function showUserOrders() {
    shoppingCart.innerHTML = '';
    const storedObjects = getOrders();
    const shoppingCartTitle = document.createElement('h2');
    const updatePageButton = document.createElement('button');
    shoppingCartTitle.id = 'shopping-cart-title';
    shoppingCartTitle.textContent = 'Корзина:';
    updatePageButton.textContent = 'Повернтись на головну';
    shoppingCart.appendChild(shoppingCartTitle);

    if (storedObjects && storedObjects.length > 0) {
        const ordersData = document.createElement('ol');
        const delOrdersListButton = document.createElement('button')

        ordersData.id = 'orders-data';
        delOrdersListButton.textContent  = 'Видалити історію замовлень';
        delOrdersListButton.id = 'del-orders-list-button';
        shoppingCart.appendChild(ordersData);
        shoppingCart.appendChild(delOrdersListButton);

        storedObjects.forEach((storedObject) => {
            const orderItem = document.createElement('li');
            const deleteOrderDataButton = document.createElement('button');

            orderItem.id = 'order-item';
            orderItem.innerHTML = `<p><strong>Дата:</strong> ${storedObject.orderTime}. <strong>Ціна:</strong> ${storedObject.price}грн</p>`;
            deleteOrderDataButton.id = 'delete-order-data-button';
            deleteOrderDataButton.textContent = 'Видалити замовлення';
            orderItem.appendChild(deleteOrderDataButton);
            ordersData.appendChild(orderItem);

            deleteOrderDataButton.addEventListener('click', () => {
                deleteOrder();
            })
        });

        delOrdersListButton.addEventListener('click', () => {
            clearAllOrders();
        })

        selectOrderElements();
    } else {
        const emptyCart = document.createElement('p');
        emptyCart.textContent = 'У вас ще немає замовлень!';

        shoppingCart.appendChild(emptyCart);
    }

    shoppingCart.appendChild(updatePageButton);

    updatePageButton.addEventListener('click', () => {
        refreshPage();
    })
}

function deleteOrder() {
    const ordersData = document.getElementById('orders-data');
    ordersData.addEventListener('click', (event) => {
        if (event.target.id === 'delete-order-data-button') {
            const orderItem = event.target.parentNode;
            const orderIndex = Array.from(ordersData.children).indexOf(orderItem);
            const orders = getOrders();
            orders.splice(orderIndex, 1);
            localStorage.setItem('orders', JSON.stringify(orders));
            orderItem.remove();
            showUserOrders();
        }
    });
}

function refreshPage() {
    window.location.reload();
}

function selectOrderElements() {
    const ordersData = document.getElementById('orders-data');
    const orderElements = document.querySelectorAll('#order-item');
    orderElements.forEach((orderElement, index) => {
        orderElement.addEventListener('click', () => {
            const storedObjects = getOrders();
            const order = storedObjects[index];
            const orderData = ordersData.children[index];
            let orderDetails = orderData.querySelector('#orderDetails');

            if (orderDetails) {
                orderDetails.remove();
            } else {
                orderDetails = document.createElement('div');
                orderDetails.id = 'orderDetails';
                orderDetails.innerHTML = `
                  <p>Товар: ${order.product}</p>
                  <p>Кількість: ${order.quantity} шт.</p>
                  <p>Ім'я клієнта: ${order.fullName}</p>
                  <p>Місто: ${order.city}</p>
                  <p>Відділення Нової пошти: ${order.deliveryBranch}</p>
                  <p>Метод оплати: ${(order.cardPayment).toLowerCase()}</p>
                `;

                if (order.comment) {
                    const orderDetailsComment = `<p>Коментар: ${order.comment}</p>`;
                    orderDetails.innerHTML += orderDetailsComment;
                }

                orderData.appendChild(orderDetails);
            }
        });
    });
}

showUserOrders();

function clearAllOrders() {
    localStorage.clear();
    showUserOrders();
}