class Queue{
    constructor(){
        this.first=null
        this.last=null
        this.size=0
    }
}

class Node{
    constructor(){
        this.first=null
        this.last=null
        this.size=0

    }
    enqueue(){
            var newNode=new Node(val)                   //creating a new node with value val
            if(!this.first){                            //if there is no first then first and last are the new node
                this.first=newNode                      //first is the new node
                this.last=this.first                    //last is the first
            }
            else{                                       //if there is first then new node is the last and next is the new node
                this.last.next=newNode                  //next of last is the new node
                this.last=newNode                       //last is the new node
            }
            this.size++                                 //size is increased by 1
            return this                                  //returning the queue  

    }
    denqueue(){ 

        if(!this.first) return null                     //if there is no first then return null
        var temp=this.first                             //temp is the first
        if(this.first===this.last){                     //if first is the last then first and last are null
            this.last=null
        }
        this.first=this.first.next                      //first is the next element
        this.size--                                     //size is decreased by 1
        return temp.val                                  //returning the value

}
}

var queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.denqueue()


