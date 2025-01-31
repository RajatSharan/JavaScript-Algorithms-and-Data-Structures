//Write a function which takes in a string and returns counts of each character in the string

//Solution 1:
//charcount("aaaaaa"); //{a:4}

//charcount("hello");//{h:1,e:1,l:2,o:1}

// function charcount(string){
//Make object to return at the end
//   var result ={}

// loop over string for each character
//     for(let i=0;i<string.length;i++){
//         var char=string[i]
//         if(result[char]>0){
//             result[char]++
//         }else{
//             result[char]=1
//         }


//     }
//    return result 
// }


// console.log(charcount("I am Rajat sharan 1234"))

//Solution 2 :

// function charCnt(string) {

//     let obj = {}

//     for (let i = 0; i < string.length; i++) {

//         var char = string[i].toLowerCase()
//         if (/[a-z0-9]/.test(char)) {

//             if (obj[char] > 0) {

//                 obj[char]++

//             } else {
//                 obj[char] = 1
//             }


//         }


//     }

//     return obj


// }

// console.log(charCnt("I am Rajat sharan 1234 !!"))

//Solution 3 ::

// //LOOK BACK and Refector

function refcharCount(str) {

    let obj = {}

    for (let char of str) {

        if (/[a-zA-Z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1
        }


    }
    return obj
}

console.log(refcharCount("I am Rajat sharan 1234 !!"))

//Solution 4
// function isAlphaNumeric(char){
//     let code=char.charCodeAt(0);
//     if(!(code>47 && code <58)&&
//         !(code>64 && code <91)&&
//         !(code>96 && code <123)){

//             return false

//         }
//         return true
// }