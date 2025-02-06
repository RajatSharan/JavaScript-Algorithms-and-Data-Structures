function selectSort(arr){
    const swap=(arr,idx,idx2)=>
    {
        ([arr[idx],arr[idx2]]=[arr[idx2],arr[idx]])
    }
    for(let i = 0 ; i < arr.length ; i++)
    {
        let lowest = i
        for(let j = i + 1 ; j < arr.length ; j++)
        {
        if(arr[j]<arr[lowest])
            {
            lowest=j
            }
            
        }
        if(i!==lowest) swap(arr,i,lowest)
    }
return arr

}

console.log(selectSort([34,22,10,19,17])) // [10, 17, 19, 22, 34]