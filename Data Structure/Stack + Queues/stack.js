class Node{
    constructor(val){                                     //creating a class Node                                
        this.val=val                                     //value of the node
        this.next=null                                   //next of the node
    }
}
class Stack{
    constructor(){                                     //constructor is a special method in class
        this.first=null                                //initially first is null
        this.last=null                                 //initially last is null                   
        this.size=0                                    //initially size is 0
    }   
    push(val){
        var newNode=new Node(val)                   //creating a new node with value val
        if(!this.first)                             //if there is no first then first and last are the new node
        {
            this.first=newNode                  //first is the new node
            this.last=this.first                //last is the first
        }
        else{
            var temp=this.first                  //temp is the first
            this.first=newNode                    //first is the new node
            this.first.next=temp                  //next of first is temp
        }
        this.size++                               //size is increased by 1
        return this                                 //returning the stack
    }
    pop(){
        if(!this.first) return null                //if there is no first then return null
        var temp=this.first                        //temp is the first
        if(this.first===this.last){                 //if first is the last then first and last are null
            this.last=null
        }
        this.first=this.first.next                 //first is the next element
        this.size--                                //size is decreased by 1
        return temp.val                            //returning the value of temp
    }        
}