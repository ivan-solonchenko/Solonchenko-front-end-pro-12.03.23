//HW_6
const userWasBorn = prompt('Вкажіть рік вашого народження.');
const userCity = prompt('Вкажіть місто вашого проживання.');
const userFavoriteSport = prompt('Який ваш улюблений вид спорту?');

let userAge;
let cityDescription;
let sportDescription;

userAge = userWasBorn === null ? 'Шкода, що Ви не захотіли вказати свою дату народження' : `Ваш вік: ${2023 - userWasBorn}`;

if (userCity === 'Київ' || userCity === 'Вашингтон' || userCity === 'Лондон') {
    cityDescription = `Ти живеш у столиці ${userCity}`;
} else if (userCity === null) {
    cityDescription = `Шкода, що Ви не захотіли вказати своє місто`;
} else {
    cityDescription = `Ти живеш у місті ${userCity}`;
};


//Вирішення задачі за допомогою тернарного оператора.

// cityDescription = userCity === 'Київ'
//     ? `Ти живеш у столиці ${userCity}`
//     : userCity === 'Вашингтон'
//         ? `Ти живеш у столиці ${userCity}`
//         : userCity === 'Лондон'
//             ? `Ти живеш у столиці ${userCity}`
//             : userCity === null
//                 ? `Шкода, що Ви не захотіли вказати своє місто`
//                 : `Ти живеш у місті ${userCity}`



//Вирішення задачі за допомогою конструкції switch/case.

// switch (userCity) {
//     case 'Київ':
//     case 'Вашингтон':
//     case 'Лондон':
//         cityDescription = `Ти живеш у столиці ${userCity}`;
//         break;
//     default:
//         cityDescription = `Ти живеш у місті ${userCity}`;
//         break;
// };

if (userFavoriteSport === 'Бокс') {
    sportDescription ='Круто! Хочеш стати як Олександр Усик?';
} else if (userFavoriteSport === 'Футбол') {
    sportDescription = 'Круто! Хочеш стати як Кріштіану Роналду?';
} else if (userFavoriteSport === 'Баскетбол') {
    sportDescription = 'Круто! Хочеш стати як Майкл Джордан?';
} else if (userFavoriteSport === null) {
    sportDescription = `Шкода, що Ви не захотіли вказати вид спорту`;
} else {
    sportDescription = 'Класний вибір!';
};

//Вирішення задачі за допомогую конструкції switch/case.

// switch (userFavoriteSport) {
//     case 'Бокс':
//         sportDescription ='Круто! Хочеш стати як Олександр Усик?';
//         break;
//     case 'Футбол':
//         sportDescription = 'Круто! Хочеш стати як Кріштіану Роналду?';
//         break;
//     case 'Баскетбол':
//         sportDescription = 'Круто! Хочеш стати як Майкл Джордан?';
//         break;
//     case null:
//         sportDescription = `Шкода, що Ви не захотіли вказати вид спорту`;
//         break;
//     default:
//         sportDescription = 'Круто!';
//         break;
// };

alert(`${userAge}.\n${cityDescription}.\n${sportDescription}`);


//HW_7
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

//HW_8
let userAction = prompt('Яку дію ви хочете зробити?');
let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

let result;

switch(userAction) {
    case 'add':
        result = num1 + num2;
        alert(`${num1} + ${num2} = ${result}`);
        break;
    case 'sub':
        result = num1 - num2;
        alert(`${num1} - ${num2} = ${result}`);
        break;
    case 'mult':
        result = num1 * num2;
        alert(`${num1} * ${num2} = ${result}`);;
        break;
    case 'div':
        result = num1 / num2;
        alert(`${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log('Ви ввели некоректну операцію');
}
