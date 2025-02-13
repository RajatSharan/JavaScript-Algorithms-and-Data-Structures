class Node{
    constructor(v){
        this.val=v
        this.left=null
        this.right=null
    }

}

class binaryTree{
    constructor(){
        this.root=null
    }
    insert(){
        var newNode=new Node(val)                                   //creating a new node with value val
        if(!this.root)                                              //if there is no root then root is the new node
        {
            this.root=newNode                                           //root is the new node
            return this                                           //returning the tree                              
        }
        var current=this.root                                      //current is the root
        while(true){
            if(val===current.val) return undefined                 //if value is equal to current value then return undefined
            if(val<current.val){                                   //if value is less than current value
                if(!current.left)
                {                                 //if there is no left then left is the new node
                    current.left=newNode
                    return this
                }
                current=current.left                                //current is the left
            }
            else{                                                  //if value is greater than current value
                if(!current.right){                                //if there is no right then right is the new node
                    current.right=newNode
                    return this
                }
                current=current.right                               //current is the right
            }
    }
}
    find(){
        if(!this.root) return false                                  //if there is no root then return false
        var current=this.root                                       //current is the root
        var found=false                                             //found is false
        while(current && !found){                                   //while current is there and found is false
            if(val<current.val){                                    //if value is less than current value
                current=current.left                                 //current is the left
            }
            else if(val>current.val){                               //if value is greater than current value
                current=current.right                                //current is the right
            }
            else{
                found=true                                         //found is true
            }
        }
        if(!found) return false                                     //if found is false then return false
        return current                                             //return current
    }
}

var tree=new binaryTree()
tree.root=new Node(10)
tree.root.left=new Node(5)
tree.root.right=new Node(15)
tree.root.left.left=new Node(2)
tree.root.left.right=new Node(7)
tree.root.right.left=new Node(12)
tree.root.right.right=new Node(20)
