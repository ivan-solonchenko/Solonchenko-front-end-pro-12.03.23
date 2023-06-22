const imageElement = document.getElementById('slider-image');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

const imageUrls = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
    './images/image8.jpg',
    './images/image9.jpg',
];

let currentIndex = 4;

function setCurrentImage() {
    const imageUrl = imageUrls[currentIndex];
    imageElement.src = imageUrl;

    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentIndex === imageUrls.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

nextButton.addEventListener('click', () => {
    if (currentIndex < imageUrls.length - 1) {
        currentIndex++;
        setCurrentImage();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        setCurrentImage();
    }
});

setCurrentImage();