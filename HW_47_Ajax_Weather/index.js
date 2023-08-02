function getWeather() {
    let xhr = new XMLHttpRequest();
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                displayWeather(data);
            } else {
                console.error('Error', xhr.status)
            }
        }
    };

    xhr.send();
}

function displayWeather(data) {
    const weatherContent = document.getElementById('weather-content');
    let iconCode = data.weather[0].icon;
    let iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
    console.log(iconCode);

    weatherContent.innerHTML = `           
        <h1>Погода у Львові</h1>
        <p>Температура: ${data.main.temp}°C</p>
        <p>Тиск: ${data.main.pressure}гПа</p>
        <p>Опис: ${data.weather[0].description}</span></p>
        <p>Вологість: ${data.main.humidity}%</p>
        <p>Швидкість вітру: ${data.wind.speed}м/с</p>
        <p>Напрямок вітру: ${data.wind.deg}°</p>
        <img src="${iconUrl}" alt="Піктограма погоди">
    `
}

getWeather();