//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(Number){
    
    if(Number ===0 ) return 0
    return Number + recursiveRange(Number-1)
    
   
}