let firstNumber = prompt('Enter the first number');
let secondNumber = prompt('Enter the second number');
let thirdNumber = prompt('Enter the third number');
let result = (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber))/3;

if (!isNaN(result)) {
    alert(`Average: ${result}`);
};

if (isNaN(result)) {
    alert('You entered an invalid number!');
};

