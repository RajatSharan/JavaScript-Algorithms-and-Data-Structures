function selectSort(arr){
    for(let i=0;i<arr.length;i++)
        var lowest = i
        for(let j=i+1;j<arr.length;j++){
            arr[lowest]>arr[j]?lowest=j:null 
            
        }
        if(i!==lowest){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp

        }
      

    return arr

}

selectSort([34,22,10,19,17]) // [10, 17, 19, 22, 34]