let btnGetLink = document.getElementById('btnPrompt');
let btnGoTolLink = document.getElementById('btnLink');
let link;

btnGetLink.addEventListener('click', function () {
    link = prompt('Введіть посилання');
    if (link === '') {
        alert('Ви нічого не ввели!');
    }
    if (link.startsWith('http') === false && link.startsWith('https') === false) {
        link = `https://${link}`;
    }
})

btnGoTolLink.addEventListener('click', function () {
    location.href = link;
})
