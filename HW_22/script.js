class Student {
    constructor(firstName, lastName, wasBorn, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wasBorn = wasBorn;
        this.grades = grades;
    }

    attendance = new Array(25).fill(null);

    getAgeOfStudent() {
        const currentYear = new Date().getFullYear();
        console.log(`Студенту: ${currentYear - this.wasBorn} років!`);
    }

    getAverageScore() {
        const averageScore = this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
        console.log(`Середній бал студента: ${averageScore}!`);
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index >= 0) {
            return this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index >= 0) {
            return this.attendance[index] = false;
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

student1.summary();


console.log('---------------------------')
const student2 = new Student('Viktoria', 'Kravchenko', 1998, [60, 95, 50, 100, 75]);

student2.getAgeOfStudent();
student2.getAverageScore();

student2.present();
student2.present();
student2.present();
student2.absent()
student2.absent()
student2.absent()
student2.present();
student2.present();
student2.present();
student2.absent()
student2.absent();

student1.summary();