class breadthFirstSearch {
  constructor() {                       //creating a new node with value val
    this.queue = [];                        //if there is no first then first and last are the new node
  }

  search(node) {                            //if there is no first then first and last are the new node
    this.queue.push(node);                  //first is the new node
    while (this.queue.length > 0) {         //if there is first then new node is the last and next is the new node
      let current = this.queue.shift();             //next of last is the new node
      console.log(current.value);           //last is the new node
      if (current.left) {                   //size is increased by 1
        this.queue.push(current.left);          //returning the queue
      }
      if (current.right) {                      //if there is no first then return null
        this.queue.push(current.right);         //temp is the first
      }
    }
  }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    }

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let bfs = new breadthFirstSearch();
bfs.search(root);
// Output: 1 2 3 4 5 6 7
// Explanation: The Breadth First Search Traversal of the given tree is 1 2 3 4 5 6 7
// The tree is:
//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7
// The BFS traversal of the tree is 1 2 3 4 5 6 7
// Hence the output is 1 2 3 4 5 6 7
// The time complexity of Breadth First Search is O(n) where n is the number of nodes in the tree. The space complexity of Breadth First Search is O(n) where n is the number of nodes in the tree.
// The space complexity of Breadth First Search is O(n) where n is the number of nodes in the tree.
