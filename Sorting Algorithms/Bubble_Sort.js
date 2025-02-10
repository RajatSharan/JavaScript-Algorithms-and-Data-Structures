function BubbleSort(arr){

    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                //SWAP!
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(BubbleSort([37,45,29,8])) // [8,29,37,45]


//Optimized Bubble Sort with noSwaps

function BubbleSort(arr){
    var noSwaps
    for(var i=0;i<arr.length;i++){
        noSwaps=true
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                arr[j],arr[j+1]=arr[j+1],arr[j]
                noSwaps=false
            }
        }
        if(noSwaps) break
    }

return arr
}

console.log(BubbleSort([37,45,29,8]))


