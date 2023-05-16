//1. Створити клас Людина.
    class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

// 2. Створити клас Квартира.
class Apartment {
    residents = [];

    addResident (resident) {
        this.residents.push(resident);
    }
}
//3. Створити клас Будинок.
class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment (apartment) {
        if (this.apartments.length >= this.maxApartments) {
            console.log('Вже досягнута максимальна кількість квартир!');
        } else {
            this.apartments.push(apartment);
        }
    }
}

//Cтворити декілька екземплярів класу Людина
const person1 = new Person ('Іван', 'чоловік');
const person2 = new Person ('Вікторія', 'жінка ');
const person3 = new Person ('Ксенія', 'жінка ');

//Cтворити декілька екземплярів класу Квартира
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

//Додадити екземпляри класу Людина до екземплярів класу Квартира
apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

//Cтворити екземпляр класу Будинок
const house1 = new House(2);

//Додадити екземпляри класу Квартира до екземплярів класу Будинок
house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment3);

console.log(house1);