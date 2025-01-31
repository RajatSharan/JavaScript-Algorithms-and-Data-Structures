//Write a function called same,which accepts two arrays.
// The function should return true if every value in the array 
// has its corrosponding value squared in the same secound array.The frequency must be the same.

//NAIVE SOLUTION

// function same(arr1,arr2){

//     if(arr1.lenght !==arr2.lenght){
//         return false
//     }
//     for (let i=0;i<arr1.lenght;i++){
//         let correctIndex =arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex===-1){
//             return false;
//         }
//         console.log(arr2)
//         arr2.splice(correctIndex,1)
//     }
//     return true

// }

// console.log(same([1,3,2],[9,1,4,4]))


//REFECTOR

function sameRefec(arr1,arr2){

    if(arr1.lenght!=arr2.lenght){
        return false
    }
    let frequencyCounter1={}
    let frequencyCounter2={}

    for(let val of arr1){
        frequencyCounter1[val]=(frequencyCounter1[val] ||0 )+1
    }
    for(let val of arr2){
        frequencyCounter2[val]=(frequencyCounter2[val] ||0 )+1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
           return false
        }
        if(frequencyCounter2[key**2 !== frequencyCounter1[key]]){
            return false
        }
    }

}

console.log(sameRefec([1,3,2,5],[9,1,4,4,22]))