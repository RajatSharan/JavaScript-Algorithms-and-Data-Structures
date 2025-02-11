class Node{
    constructor(val){
        this.val=val         //value of the node
        this.next=null       //next of the node
        this.prev=null       //previous of the node

    }
}


class DoublyLinkedList{
    constructor(){
        this.head=null        //head of the list
        this.tail=null        //tail of the list
        this.length=0         //length of the list
    }
    push(val){
        var newNode=new Node(val)                  //creating a new node with value val
        if(this.head===null){                      //if there is no head then head is the new node and tail is the head
            this.head=newNode                      //head is the new node
            this.tail=this.head                    //tail is the head

        }
        else{
            this.tail.next=newNode                 //next of tail is the new node
            newNode.prev=this.tail                  //previous of new node is the tail
            this.tail=newNode                      //tail is the new node
        }
        this.length++                              //length is increased by 1
        return this                                //returning the list
    }
    pop(){
        if(!this.head) return undefined           //if there is no head then return undefined
        var current=this.tail                     //current is the last element
        if(this.length===1){                      //if length is 1 then head and tail are null
            this.head=null                        //head is null
            this.tail=null                        //tail is null
        }
        else{
            this.tail=current.prev                //tail is the previous element
            this.tail.next=null                   //next of tail is null
            current.prev=null                     //previous of current is null
        }
        this.length--                             //length is decreased by 1
        return current                            //returning the last element
    }
    shift(){                                     //removing the first element
        if(!this.head) return undefined           //if there is no head then return undefined
        var current=this.head                     //current is the first element
        if(this.length===1){                      //if length is 1 then head and tail are null
            this.head=null                        //head is null
            this.tail=null                        //tail is null
        }
        else{
            this.head=current.next                //head is the next element
            this.head.prev=null                   //previous of head is null
            current.next=null                     //next of current is null
        }
        this.length--                             //length is decreased by 1
        return current                            //returning the first element

    }
    unshift(val){                                 //adding the element at the start
        var newNode=new Node(val)                 //creating a new node with value val
        if(!this.head){                           //if there is no head then head is the new node and tail is the head
            this.head=newNode                      //head is the new node
            this.tail=this.head                    //tail is the head
        }
        else{
            newNode.next=this.head                 //next of new node is the head
            this.head.prev=newNode                 //previous of head is the new node
            this.head=newNode                      //head is the new node
        }
        this.length++                              //length is increased by 1
        return this                                //returning the list
    }
    get(index){                                     //getting the element at the index 
        if(index<0 || index>=this.length) return null    //if index is invalid then return null
        var current=this.head                        //current is the first element
        var count=0                                  //count is 0
        while(count!==index){                        //while count is not equal to index
            current=current.next                     //current is the next element
            count++                                  //count is increased by 1
        }
        return current                               //returning the element at the index
    }
    set(index,val){                                  //setting the value at the index   
        var foundNode=this.get(index)                //getting the node at the index
        if(foundNode){                               //if node is found then value is set to val
            foundNode.val=val
            return true
        }
        return false
    }   
    insert(index,val){                              //inserting the value at the index
        if(index<0 || index>this.length) return false   //if index is invalid then return false
        if(index===0) return !!this.unshift(val)        //if index is 0 then unshift the value
        if(index===this.length) return !!this.push(val) //if index is equal to length then push the value
        var newNode=new Node(val)                      //creating a new node with value val
        var prev=this.get(index-1)                     //getting the previous element
        var temp=prev.next                             //temp is the next of previous
        prev.next=newNode                              //next of previous is the new node
        newNode.prev=prev                              //previous of new node is previous
        newNode.next=temp                              //next of new node is temp
        temp.prev=newNode                              //previous of temp is new node
        this.length++                                  //length is increased by 1
        return true                                    //returning true
    }   
    remove(){
        if(index<0 || index>=this.length) return undefined //if index is invalid then return undefined
        if(index===0) return this.shift()                   //if index is 0 then shift the value
        if(index===this.length-1) return this.pop()         //if index is equal to length-1 then pop the value
        var prev=this.get(index-1)                          //getting the previous element
        var removed=prev.next                               //removed is the next of previous
        prev.next=removed.next                              //next of previous is the next of removed
        removed.next.prev=prev                              //previous of next of removed is previous
        removed.next=null                                  //next of removed is null
        removed.prev=null                                  //previous of removed is null
        this.length--                                      //length is decreased by 1
        return removed                                     //returning the removed element
    }
}
