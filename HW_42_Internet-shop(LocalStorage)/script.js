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

const leftSidebarContent = document.getElementById('left-sidebar-content');
const categoryList = document.getElementsByClassName('category');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('productDetails');
const buyButton = document.getElementById('buy-button');
const orderForm = document.getElementById('orderForm');
const ordersButton = document.getElementById('ordersButton');
let selectedProduct;

function showProducts(category) {
    productList.innerHTML = '';
    const products = data[category];

    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = product;
        listItem.setAttribute('data-index', index);
        productList.appendChild(listItem);
    });
}

Array.from(categoryList).forEach((element) => {
    element.addEventListener('click', (event) => {
        const category = event.target.textContent;
        showProducts(category);
        productInfo.style.display = 'block';
        products.style.display = 'block';
        orderForm.style.display = 'none';
        orderForm.reset();
    });
});

productList.addEventListener('click', (event) => {
    const product = event.target.textContent;
    productDetails.textContent = 'Ви обрали: ' + product.toLowerCase();
    orderForm.style.display = 'none';
    orderForm.reset();
    selectedProduct = product;
});

buyButton.addEventListener('click', () => {
    document.getElementById('orderForm').style.display = "block";
});

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const city = document.getElementById('city').value;
    const deliveryBranch = document.getElementById('deliveryBranch').value;
    const cashOnDelivery = document.getElementById('cashOnDelivery');
    const cardPayment = document.getElementById('cardPayment');
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;
    let selectedPaymentMethod;

    function fillingForm() {
        const price = prices[selectedProduct] * quantity;

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

    if (orderForm.checkValidity()) {
        const order = fillingForm();
        saveOrder(order);
        console.log(order);

        alert(`Ви купили ${selectedProduct.toLowerCase()}: ${quantity} шт.\nВідділення Нової пошти для надсилання: ${deliveryBranch}.\nДякуємо за покупку!`);

        orderForm.reset();
        productDetails.innerText = '';
        productInfo.style.display = 'none';
        products.style.display = 'none';
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

function deleteOrder(index) {
    const orders = getOrders();
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function displayOrderDetails(orderIndex) {
    const orders = getOrders();
    const order = orders[orderIndex];
    const ordersData = document.getElementById('ordersData');
    const orderData = ordersData.children[orderIndex];
    const deleteOrderData = '<button id="delete-order-data-button">Видалити замовлення</button>'

    const orderDetailsHTML = `
<div id="orderDetails">
    <p>Товар: ${order.product}</p>
    <p>Кількість: ${order.quantity} шт.</p>
    <p>Ім'я клієнта: ${order.fullName}</p>
    <p>Місто: ${order.city}</p>
    <p>Відділення Нової пошти: ${order.deliveryBranch}</p>
    <p>Метод оплати: ${(order.cardPayment).toLowerCase()}</p>
</div>
`;

    orderData.innerHTML += orderDetailsHTML;

    if (order.comment) {
        const orderDetails = document.getElementById('orderDetails');
        orderDetailsComment = `<p>Коментар: ${order.comment}</p>`;

        orderDetails.innerHTML += orderDetailsComment;
    }

    orderData.innerHTML += deleteOrderData;

//Видалення одного
    const delOrderDataButton = document.getElementById('delete-order-data-button');

    delOrderDataButton.addEventListener('click', () => {
        orderData.remove();
        deleteOrder(orderIndex);
    })
}

ordersButton.addEventListener('click', () => {
    const ordersData = document.getElementById('ordersData');
    const storedObjects = getOrders();
    leftSidebarContent.style.display = "none";

    function showUserOrders() {
        storedObjects.forEach((storedObject, index) => {
            const orderItem = document.createElement('li');
            orderItem.id = 'order-item';
            orderItem.innerHTML = `<p><strong>Дата:</strong> ${storedObject.orderTime}. <strong>Ціна:</strong> ${storedObject.price}грн</p>`;
            ordersData.appendChild(orderItem);
        });
    }

    if (storedObjects && storedObjects.length > 0) {
        ordersData.innerHTML = '';
        showUserOrders()
    } else {
        ordersData.innerHTML = 'У вас ще немає замовлень!';
    }

//Видалення всього
    const delOrdersDataButton = document.createElement('button');
    delOrdersDataButton.id = 'delOrdersData';
    delOrdersDataButton.textContent  = 'Видалити історію замовлень';
    ordersData.appendChild(delOrdersDataButton);

    delOrdersDataButton.addEventListener('click', () => {
        localStorage.clear();
    })


    const orderElements = document.querySelectorAll('#order-item');
    orderElements.forEach((orderElement, index) => {
        orderElement.addEventListener('click', () => {

            const ordersData = document.getElementById('ordersData');
            const orderData = ordersData.children[index];
            const orderDetails = orderData.querySelector('#orderDetails');

            if (!orderDetails) {
                displayOrderDetails(index);
            }
        });
    });
});