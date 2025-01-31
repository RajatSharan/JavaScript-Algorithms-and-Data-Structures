function isPalindrome(str){

    let rev= str.split('').reverse().join('')
    if(rev==str){
        return true
    }
    else{
        return false
    }
}

let str="racecar"

console.log(isPalindrome(str))