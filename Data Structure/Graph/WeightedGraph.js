class WeightedGraph {
    constructor() {
        this.adjacencyList = {}; // Stores graph as an adjacency list
    }

    // Add a vertex (node) to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add a weighted edge between two vertices
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight }); // Undirected graph
        }
    }

    // Display the graph
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} ->`, this.adjacencyList[vertex].map(edge => `[${edge.node}, ${edge.weight}]`).join(", "));
        }
    }
}

// Example usage:
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 5);
graph.addEdge("B", "D", 10);
graph.addEdge("C", "D", 3);

graph.display();
