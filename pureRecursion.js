function pureFunction(arr){

    let newarr=[]

    if(arr.length ===0){
        return newarr
    }
    if(arr[0] % 2 !==0){

        newarr.push(arr[0])

    }
    newarr=newarr.concat(pureFunction(arr.slice(1)))
    return newarr   
}

console.log(pureFunction([1,2,34,33,35,38,45]))