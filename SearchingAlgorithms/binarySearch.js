//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr,ele){
 
    let start =0
    let end= arr.length-1
    let middle=Math.floor((start+end)/2)
    console.log(start,end,middle)

    while(arr[middle]!== ele && start <=end){
            if(ele <arr[middle]){
                end=middle-1

    }
    else{
        start=middle+1
    }
    middle=Math.floor((start+end)/2)
    
    }
    return arr[middle] === ele ? middle:-1



}           

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],20))