function displayData() {
    let registrationForm = document.getElementById('registrationForm');
    let tableContainer = document.getElementById('tableContainer');

    tableContainer.innerHTML = '';

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let birthdate = document.getElementById('birthdate').value;
    let genderElement = document.querySelector('input[name="gender"]:checked');
    let gender = genderElement ? genderElement.value : '';

    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;

    let languages = [];
    let languagesInputs = document.querySelectorAll('[name=languages]');
    languagesInputs.forEach(language => {
        if (language.checked) {
            languages.push(language.value);
        }
    });

    let userDataTitle = document.createElement('h1');
    userDataTitle.textContent = 'Форма з даними користувача';
    userDataTitle.classList.add('title-text');

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    let row1 = document.createElement('tr');
    let cell1 = document.createElement('th');
    cell1.textContent = "Ім'я:";
    let cell2 = document.createElement('td');
    cell2.textContent = firstName;
    row1.appendChild(cell1);
    row1.appendChild(cell2);
    tbody.appendChild(row1);

    let row2 = document.createElement('tr');
    let cell3 = document.createElement('th');
    cell3.textContent = 'Прізвище:';
    let cell4 = document.createElement('td');
    cell4.textContent = lastName;
    row2.appendChild(cell3);
    row2.appendChild(cell4);
    tbody.appendChild(row2);

    let row3 = document.createElement('tr');
    let cell5 = document.createElement('th');
    cell5.textContent = 'Дата народження:';
    let cell6 = document.createElement('td');
    cell6.textContent = birthdate;
    row3.appendChild(cell5);
    row3.appendChild(cell6);
    tbody.appendChild(row3);

    let row4 = document.createElement('tr');
    let cell7 = document.createElement('th');
    cell7.textContent = 'Стать:';
    let cell8 = document.createElement('td');
    cell8.textContent = gender;
    row4.appendChild(cell7);
    row4.appendChild(cell8);
    tbody.appendChild(row4);

    let row5 = document.createElement('tr');
    let cell9 = document.createElement('th');
    cell9.textContent = 'Місто:';
    let cell10 = document.createElement('td');
    cell10.textContent = city;
    row5.appendChild(cell9);
    row5.appendChild(cell10);
    tbody.appendChild(row5);

    let row6 = document.createElement('tr');
    let cell11 = document.createElement('th');
    cell11.textContent = 'Адреса:';
    let cell12 = document.createElement('td');
    cell12.textContent = address;
    row6.appendChild(cell11);
    row6.appendChild(cell12);
    tbody.appendChild(row6);

    let row7 = document.createElement('tr');
    let cell13 = document.createElement('th');
    cell13.textContent = 'Мови:';
    let cell14 = document.createElement('td');
    cell14.textContent = languages.join(', ');
    row7.appendChild(cell13);
    row7.appendChild(cell14);
    tbody.appendChild(row7);


    if (registrationForm.checkValidity() !== false && languages.length !==0) {
        registrationForm.style.display = 'none';
        tableContainer.style.display = 'block';
        tableContainer.appendChild(userDataTitle);
        tableContainer.appendChild(table);
        table.appendChild(tbody);
    } else {
        alert('Заповніть всі поля!')
    }
}

window.addEventListener('beforeunload', function() {
    document.getElementById('registrationForm').reset();
});