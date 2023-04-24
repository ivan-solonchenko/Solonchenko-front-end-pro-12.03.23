class Student {
    constructor(name, surname, wasBorn, grades) {
        this.name = name;
        this.surname = surname;
        this.wasBorn = wasBorn;
        this.grades = grades;
    }

    attendance = new Array(25);

    getAgeOfStudent() {
        const currentYear = new Date().getFullYear();
        console.log(`Студенту: ${currentYear - this.wasBorn} років!`);
    }

    getAverageScore() {
        const averageScore = this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
        console.log(`Середній бал студента: ${averageScore}!`);
    }

    present() {
        if (this.attendance.filter(Boolean).length >= 25) {
            console.log("Масив відвідуваності заповнений");
        }

        const index = this.attendance.indexOf(undefined);
        if (index >= 0) {
            this.attendance[index] = true;
        }
    }

    absent() {
        if (this.attendance.filter(Boolean).length >= 25) {
            console.log("Масив відвідуваності заповнений");
        }

        const index = this.attendance.indexOf(undefined);
        if (index >= 0) {
            this.attendance[index] = false;
        }
    }

    summary() {
        const averageScore = this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
        const averageAttendance = this.attendance.reduce((acc, isPresent) => acc + (isPresent ? 1 : 0), 0) / this.attendance.length;

        if (averageScore > 90 && averageAttendance > 0.9) {
            console.log('Молодець!');
        } else if (averageScore > 90 || averageAttendance > 0.9) {
            console.log('Добре, але можна краще');
        } else {
            console.log('Редиска!');
        }
    }
}


const student1 = new Student('Ivan', 'Solonchenko', 1997, [90, 95, 85, 100, 98]);

student1.getAgeOfStudent();
student1.getAverageScore();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1.attendance);
student1.summary();
