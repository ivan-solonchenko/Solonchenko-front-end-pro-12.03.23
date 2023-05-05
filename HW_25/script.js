class SuperMath {
    input() {
        let userZnak;
        do {
            userZnak = prompt('Введіть потрібний знак! Можливі варіанти znak: `+ - / * %');
            if (userZnak === '+' || userZnak === '-' || userZnak === '*' || userZnak === '%') {
                return userZnak;
            } else if (userZnak === null) {
                return alert('Ви відмінили дію!')
            } else {
                alert('Ви ввели невірний знак');
            }
        } while (true)
    }
}

SuperMath.prototype.check = function (obj) {
    let znak;
    const checkUser = confirm(`Чи хочете ви зробити дію "${obj.znak}"?`);
    if (checkUser) {
        znak = obj.znak;
    } else {
        znak = this.input();
    }

    switch (znak) {
        case '+':
            alert(`Результат: ${obj.X + obj.Y}`);
            break;
        case '-':
            alert(`Результат: ${obj.X - obj.Y}`);
            break;
        case '/':
            alert(`Результат: ${obj.X / obj.Y}`);
            break;
        case '*':
            alert(`Результат: ${obj.X * obj.Y}`);
            break;
        case '%':
            alert(`Результат: ${obj.X % obj.Y}`);
            break;
    }
}

const obj = {X:12, Y:3, znak: '/'};
const p = new SuperMath();
p.check(obj);