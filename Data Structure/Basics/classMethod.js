class Student{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    fullName(){
        return `The full name of the student is ${this.name} and age is ${this.age}` 
    }
    static EnrollStudents(){
        return `Enroll new students`
    }
}

let firstStudent = new Student('John', 20)
console.log(firstStudent.fullName()) //The full name of the student is John and age is 20
console.log(Student.EnrollStudents()) //Enroll new students