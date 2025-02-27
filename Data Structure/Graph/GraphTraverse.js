class Graph {
    constructor() {
        this.adjacencyList = {}; // Store graph as an adjacency list
    }

    // Add a vertex (node) to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // Undirected graph
        }
    }

    // Depth-First Search (DFS) - Recursive
    dfsRecursive(start, visited = new Set(), result = []) {
        if (!start) return null;
        visited.add(start);
        result.push(start);

        for (let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited, result);
            }
        }
        return result;
    }

    // Depth-First Search (DFS) - Iterative
    dfsIterative(start) {
        let stack = [start];
        let visited = new Set();
        let result = [];

        visited.add(start);

        while (stack.length) {
            let vertex = stack.pop();
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }

    // Breadth-First Search (BFS) - Iterative
    bfs(start) {
        let queue = [start];
        let visited = new Set();
        let result = [];

        visited.add(start);

        while (queue.length) {
            let vertex = queue.shift(); // Dequeue
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("DFS Recursive:", graph.dfsRecursive("A")); // Output: ['A', 'B', 'D', 'E', 'C', 'F']
console.log("DFS Iterative:", graph.dfsIterative("A")); // Output: ['A', 'C', 'E', 'D', 'F', 'B']
console.log("BFS:", graph.bfs("A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
