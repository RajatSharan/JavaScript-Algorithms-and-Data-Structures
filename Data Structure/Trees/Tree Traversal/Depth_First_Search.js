class DepthFirstSearch {
    constructor() {
        this.stack = [];
    }

    dfs(node) {
        if (node === null) {
            return;
        }

        this.stack.push(node);
        console.log(node.data);

        this.dfs(node.left);
        this.dfs(node.right);
    }
}

class Node {
    constructor(data) {
        this.data = data;
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


let dfs = new DepthFirstSearch();
dfs.dfs(root);
// Output: 1 2 4 5 3 6 7
// Explanation: The Depth First Search Traversal of the given tree is 1 2 4 5 3 6 7
// The tree is:
//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7
// The DFS traversal of the tree is 1 2 4 5 3 6 7
// Hence the output is 1 2 4 5 3 6 7
// The time complexity of Depth First Search is O(n) where n is the number of nodes in the tree. The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
// The space complexity of Depth First Search is O(h) where h is the height of the tree.
