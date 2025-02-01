// function countDown(num){
//     if(num<=0){
//         console.log("All Done!")
//         return 
//     }
//     console.log(num)
//     num--
//     countDown(num)
// }

// countDown(5)


function countDown1(num){
    for(var i=num;i>0;i--){
        console.log(i)
    }
    console.log("All Done!")
}

countDown1(5)