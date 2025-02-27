class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort(); // Simple sorting approach (can be optimized with a Min-Heap)
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();
        let path = [];
        let smallest;

        // Initialize distances & queue
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // Loop as long as there are elements in the priority queue
        while (pq.values.length) {
            smallest = pq.dequeue().val;

            if (smallest === end) {
                // Build path from end to start by backtracking
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(start);
                return path.reverse(); // Return shortest path
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor of this.adjacencyList[smallest]) {
                    let candidate = distances[smallest] + neighbor.weight;

                    if (candidate < distances[neighbor.node]) {
                        distances[neighbor.node] = candidate;
                        previous[neighbor.node] = smallest;
                        pq.enqueue(neighbor.node, candidate);
                    }
                }
            }
        }
        return null; // No path found
    }
}

// Example Usage:
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log("Shortest Path from A to E:", graph.dijkstra("A", "E"));
