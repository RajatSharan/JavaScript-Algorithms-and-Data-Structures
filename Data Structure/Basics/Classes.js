class Student{                              //class is a blueprint for creating objects
    constructor(firstName,LastName,year){                //constructor is a special method in class            
        this.firstName=firstName    //this is the instance variable
        this.LastName=LastName      //this is the instance variable
        this.year=year
    }

}

let firstStudent=new Student("Rajat","Sharan",2020)  //new keyword is used to create object of class  
console.log(firstStudent)  //Student { firstName: 'Rajat', LastName: 'Sharan', year: 2020 }
console.log(firstStudent.firstName)  //Rajat
firstStudent.year=2021
console.log(firstStudent.year)  //2021



