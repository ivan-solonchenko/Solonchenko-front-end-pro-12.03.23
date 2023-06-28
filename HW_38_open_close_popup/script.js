//Написати приклад використання методів функцій window.open()/window.close().

let popupWindow;
function openPopup() {
    popupWindow = window.open('https://www.youtube.com/', 'popup', 'width=400, height=300');
}

function closePopup() {
    if (popupWindow && !popupWindow.closed) {
       popupWindow.close();
    } else {
        alert('У вас немає відкритих Popup')
    }
}