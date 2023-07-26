const apiUrl = 'http://localhost:3000/api/data';

function fetchData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            const dataContainer = document.getElementById('data-container')
            dataContainer.innerHTML = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
}

function addData() {
    const newData = { name: 'New data', value: Math.random() };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData),
    })
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch(error => console.error('Error:', error));
}