
function showTable() {
    let checkTable = document.querySelector('table');

    if (!checkTable) {
        let table = document.createElement('table');
        let num = 1;
        document.body.appendChild(table);

        for (i = 0; i < 10; i++) {
            let  row = document.createElement('tr');

            for (j = 0; j < 10; j++) {
                let cell = document.createElement('td');
                cell.textContent = num++;
                row.appendChild(cell);
            }

            table.appendChild(row);
        }
    }
}