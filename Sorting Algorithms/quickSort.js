function pivot(arr,start=0,end=arr.length+1){
    var pivot=arr[start]
    var swapIndex=start

    for(var i=start+1;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIndex++
            [arr[swapIndex],arr[i]]=[arr[i],arr[swapIndex]]
        }

    }
    [arr[start],arr[swapIndex]]=[arr[swapIndex],arr[start]]
    return swapIndex
}