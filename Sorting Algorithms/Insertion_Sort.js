function InsertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var currentVal=arr[i]
        for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j]

        }
        arr[j+1]=currentVal
    }
    return arr
}

console.log(InsertionSort([2,1,9,76,4])) // [1,2,4,9,76]