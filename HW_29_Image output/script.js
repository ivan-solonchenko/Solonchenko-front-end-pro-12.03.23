let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let randomIndex = Math.round(Math.random() * images.length);
let image = document.createElement('img');

image.src = `./images/${images[randomIndex]}`;
image.title =`Це картинка з назвою ${images[randomIndex]}`;

let container = document.getElementById('image-container')
container.appendChild(image)