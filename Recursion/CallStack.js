//Understanding of Call Stack

function takeShower(){
    return "Showering!"
}

function eatBreakFast(){
    let meal=cookfood()
    return `Eating ${meal}`
}

function cookfood(){
    let items =["Oatmeal","Protine Shake"]
    return items[Math.floor(Math.random()*items.length)]
    
}

function wakeup(){
    takeShower()
    eatBreakFast()
    console.log("OK ! ready to go work !")

}

wakeup()