function add(n){

   let total=0
    for(let i=0;i<=n;i++){
        total +=i
    }

    return total
}

console.log(add(5))


// Another way to write the same program

function add2(n){

    return n* (n+1)/2

}

console.log(add2(5))