function sumZero(arr){

    for(let i=0;i<arr.lenght;i++){
        for (j=i+1;j<arr.lenght;j++){
            if(arr[i]+arr[j]===0){
                return [arr[i],arr[j]] 
            }
        }
    }
}


console.log(sumZero(-4,-3,-2,1,2,5,6))