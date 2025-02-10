class car {                                                                 //class declaration
    constructor(name, year) {                                               //constructor is a special method in class
        this.name = name;
        this.year = year;
        this.score=[]
        this.welcome = function () {                                        //instance method
            return `Welcome to the ${this.name} car! ${this.year}`;                      //instance method
        }
    }
    name(){
        return `The name of the car is ${this.name}`            //instance method
    }
    addScore(score){
        this.score.push(score)
        return `Welcome to the ${this.name} car! ${this.score}`
    }
    calculateAvg(){
        let sum=this.score.reduce((a,b)=>a+b,0)
        return sum/this.score.length  
    }
}

let firstCar= new car('Audi',2020)
console.log(firstCar.name) //The name of the car is Audi
let secondCar= new car('BMW',2021)
console.log(secondCar.name) //The name of the car is BMW
console.log(firstCar.welcome()) //Welcome to the Audi car! 2020
console.log(secondCar.addScore(32)) //Welcome to the BMW car! 2021
console.log(firstCar.addScore(34)) //Welcome to the Audi car! 2020
console.log(firstCar.calculateAvg()) //34
console.log(firstCar.addScore(36)) //Welcome to the Audi car! 2020
console.log(firstCar.addScore(98))//35
console.log(firstCar.addScore(76)) //35
console.log(firstCar.calculateAvg()) //35
console.log(firstCar.addScore(100)) //35
