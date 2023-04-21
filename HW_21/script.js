class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo () {
        console.log(`Ім'я: ${this.name}, вік: ${this.age} років.`);
    }
}

class Car {
    constructor(brand, model, yearOfMade, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.yearOfMade = yearOfMade;
        this.licensePlate = licensePlate;
    }

    setOwner (owner) {
        if (this.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Власник має вік меньший за 18 років.`)
        }
    }

    getInfo2() {
        console.log(`Інформація про автомобіль: 
        марка: ${this.brand}; 
        модель: ${this.model}; 
        рік виписку: ${this.yearOfMade}; 
        номерний знак: ${this.licensePlate}.`);
        console.log('Власник:');
        this.owner.getInfo();
    }
}

// Створення декількох екземплярів класу "Людина"
const person1 = new Person("Олександр", 23);

// Створення декількох екземплярів класу "Автомобіль"
const car1 = new Car("Toyota", "Corolla", 2015, "BC1234AA");

// Вивід інформації про автомобілі
car1.getInfo2();

const owner1 = new Car("Toyota", "Corolla", 2015, "BC1234AA");
person1.setOwner();



