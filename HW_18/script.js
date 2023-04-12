//HW_18

//Написати функцію, яка приймає 1 параметр з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function createSum() {
    let sum = 0;

    function addElement(num) {
        sum += num;
        console.log(sum);
    }
    return addElement;
}

let sum = createSum();
sum(3);
sum(5);
sum(20);