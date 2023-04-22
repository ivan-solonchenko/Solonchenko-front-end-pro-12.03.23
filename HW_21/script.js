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
        if (owner.age >= 18) {
            this.owner = owner;
        }
    }

    getInfo() {
        console.log(`---------------------------------------\nІнформація про автомобіль:
        марка: ${this.brand};
        модель: ${this.model};
        рік виписку: ${this.yearOfMade};
        номерний знак: ${this.licensePlate}.`);
        if (this.owner !== undefined) {
            console.log('Власник:');
            this.owner.getInfo()
        } else {
            console.log(`Власник має вік меньший за 18 років.`)
        }
    }
}

// Створення декількох екземплярів класу "Людина"
const person1 = new Person("Олександр", 23);
const person2 = new Person("Вікторія", 38);
const person3 = new Person("Марія", 17);

// Створення декількох екземплярів класу "Автомобіль"
const car1 = new Car("Toyota", "Corolla", 2015, "BC1234AA");
const car2 = new Car("Ford", "Mustang", 2021, "BC5678BB");
const car3 = new Car("Audi", "A6", 2023, "BE1111AA");

// Присвоїти власників автомобілям.
car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3);
car1.getInfo();
car2.getInfo();
car3.getInfo();

