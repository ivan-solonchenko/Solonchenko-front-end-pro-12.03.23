let firstNumber = parseInt(prompt('Enter the first number.'));
let secondNumber = parseInt(prompt('Enter the second number.'));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('You entered an invalid number!');
} else {
    alert(`Your result:
${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}