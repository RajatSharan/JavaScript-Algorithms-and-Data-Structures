class Node{                                         //creating a class Node
    constructor(val){                       //constructor is a special method in class
        this.val=val                                //initially value is val
        this.next=null                              //initially next is null
    }
}

// var first =new Node("Hi")                           //creating a new node with value 'Hi'
// first.next=new Node("There")                      //creating a new node with value 'Hi'
// first.next.next=new Node("How")
// first.next.next.next=new Node("Are")
// first.next.next.next.next=new Node("You")

class SinglyLinkList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
}

push(val){

    var newNode=new Node(val)
    if(!this.head==null){
        this.head=newNode
        this.tail=this.head

    }
    else{
        this.tail.next=newNode
        this.tail=newNode
    }
    this.length++
    return this

}

}
var list=new SinglyLinkList()     
//list.push("Hello") 
//list.push("Goodbye")    
                     //Node { val: 'Hi', next: Node { val: 'There', next: Node { val: 'How', next: Node { val: 'Are', next: Node { val: 'You', next: null } } } } }