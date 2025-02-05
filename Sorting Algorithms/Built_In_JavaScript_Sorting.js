//Array Built In Sorting

// function numberCompair(num1,num2){
//     return num1-num2
// }

function numberCompair(num1,num2){
    return num2-num1
}

console.log([23,3,4,45,76,97].sort(numberCompair))
    

//String built in sorting

function stringCompair(str1,str2){
    return str1.length - str2.length
}

console.log(['rajat','raj','ra','r'].sort(stringCompair))