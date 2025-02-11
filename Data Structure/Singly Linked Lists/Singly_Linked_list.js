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

class SinglyLinkList{                       //creating a class SinglyLinkList   
    constructor(){              //constructor is a special method in class  
        this.head=null          //initially head is null
        this.tail=null      //initially tail is null
        this.length=0           //initially length is 0
    }   

push(val){                          //pushing the value in the list

    var newNode=new Node(val)               //creating a new node with value val
    if(this.head===null){                   //if there is no head then head is the new node and tail is the head
        this.head=newNode                   //head is the new node
        this.tail=this.head                     //tail is the head

    }
    else{
        this.tail.next=newNode                  //next of tail is the new node
        this.tail=newNode                       //tail is the new node
    }
    this.length++                           //length is increased by 1
    return this                             //returning the list

}

travserse(){                                           //traversing the list   
    var current=this.head                 //current is the first element
    while(current){                     //while current is not null
        console.log(current.val)                //print the value of current
        current=current.next            //current is the next element
    }
}
pop(){
    if(!this.head) return undefined                                         //if there is no head then return undefined
    var current=this.head                                                   //current is the first element
    var newTail=current                                                     //newTail is the second last element
    while(current.next){
        newTail=current                                                  //newTail is the second last element                            
        current=current.next                                                    //current is the last element
    }
    console.log(current.val)                                                //returning the last element
    this.tail=newTail                                                 //newTail is the last element                                 
    this.tail.next=null
    this.length--
    if(this.length===0){
        this.head=null
        this.tail=null
    }
    return current                                                                 
}
shift(){
    if(!this.head) return undefined                        //if there is no head then return undefined
    var currentHead=this.head                               //currentHead is the first
    this.head=currentHead.next                              //head is the next element
    this.length--                                          //length is decreased by 1
    if(this.length===0){                                 //if length is 0 then head and tail are null   
        this.tail=null                                      //tail is null
    }               
    return currentHead                                  //returning the first element
}
unsift(val){
    var newNode=new Node(val)                       //creating a new node with value val
    if(!this.head){                             //if there is no head then head is the new node and tail is the head
        this.head=newNode                               //head is the new node          
        this.tail=this.head                       //tail is the head
    }
    else{                              //if there is head then new node is the head and next is the previous head
        newNode.next=this.head                //next is the previous head
        this.head=newNode            //head is the new node  
    }
    this.length++                     //length is increased by 1
    return this                        //returning the list  
}
get(index){
    if(index<0 || index>=this.length) return null       //if index is less than 0 or greater than length then return null
    var counter=0                                       //counter is 0
    var current=this.head                               //current is the first element    
    while(counter!==index){                          //while counter is not equal to index
        current=current.next                        //current is the next element   
        counter++                                    //counter is increased by 1
    }
    return current                                  //returning the element at index 
}
set(index,val){
    var foundNode=this.get(index)                    //getting the node at index
    if(foundNode){                                  //if node is found then value is set to val
        foundNode.val=val               //value is set to val             
        return true                     //returning true 
    }
    return false                    //returning false
}
insert(){
    if(index<0 || index>this.length) return false       //if index is less than 0 or greater than length then return false
    if(index===this.length) return !!this.push(val)     //if index is equal to length then push the value
    if(index===0) return !!this.unsift(val)             //if index is 0 then unsift the value
    var newNode=new Node(val)                           //creating a new node with value val
    var prev=this.get(index-1)                           //getting the previous node        
    var temp=prev.next                                   //temp is the next of previous
    prev.next=newNode                                 //next of previous is the new node
    newNode.next=temp                                //next of new node is temp
    this.length++                                   //length is increased by 1
    return true                                   //returning true  
}
remove(index){
    if(index<0 || index>=this.length) return undefined       //if index is less than 0 or greater than length then return undefined
    if(index===0) return this.shift()                          //if index is 0 then shift the value
    if(index===this.length-1) return this.pop()               //if index is length-1 then pop the value
    var previousNode=this.get(index-1)                        //getting the previous node
    var removed=previousNode.next                             //removed is the next of previous
    previousNode.next=removed.next                            //next of previous is next of removed
    this.length--                                            //length is decreased by 1
    return removed                                           //returning the removed value
}
reverse(){
    var node=this.head                          //node is the first element
    this.head=this.tail                     //head is the last element
    this.tail=node                          //tail is the first element
    var next                               //next is null
    var prev=null                    //prev is null
    for(var i=0;i<this.length;i++){         //for loop is used to reverse the list
        next=node.next                      //next is the next of node
        node.next=prev              //next of node is prev
        prev=node                   //prev is node
        node=next                      //node is next
    }
    return this                         //returning the list
}
}
var list=new SinglyLinkList()     
//list.push("Hello") 
//list.push("Goodbye")    
                     //Node { val: 'Hi', next: Node { val: 'There', next: Node { val: 'How', next: Node { val: 'Are', next: Node { val: 'You', next: null } } } } }