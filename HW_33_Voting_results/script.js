const votingData = {
    'emoji-hearts': 0,
    'emoji-happy-laugh': 0,
    'emoji-tongue': 0,
    'emoji-think-bad': 0,
    'emoji-shocked': 0
};

const parentElement = document.getElementById('voting-results');
const containers = {};

for (const elementID in votingData) {
    const count = votingData[elementID];
    const countElement = document.createElement('span');
    countElement.textContent = count;

    const container = document.createElement('div');
    const imageElement = document.getElementById(elementID);
    container.appendChild(imageElement);
    container.appendChild(countElement);
    container.classList.add('counter');
    parentElement.appendChild(container);
    containers[elementID] = container;
}

parentElement.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const elementID = clickedElement.id;
    votingData[elementID]++;

    updateResults();
});

function updateResults() {
    for (const elementID in votingData) {
        const count = votingData[elementID];
        const countElement = containers[elementID].querySelector('span');
        countElement.textContent = count;
    }
}