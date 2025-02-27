class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Insert element with priority
    enqueue(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.heapifyUp();
    }

    // Remove and return the element with the highest priority (lowest priority value)
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0]; // Element with highest priority (smallest number)
        this.heap[0] = this.heap.pop(); // Replace root with the last element
        this.heapifyDown(0);

        return min;
    }

    // Peek at the highest priority element without removing it
    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Heapify Up - Maintain min-heap property after insertion
    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // Heapify Down - Maintain min-heap property after removal
    heapifyDown(index) {
        let smallest = index;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    // Display the heap (for debugging)
    display() {
        console.log(this.heap);
    }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);
pq.enqueue("Task D", 0);

console.log("Priority Queue:", pq.heap);
console.log("Highest Priority Task (dequeue):", pq.dequeue());
console.log("Priority Queue after dequeue:", pq.heap);
console.log("Peek:", pq.peek());
