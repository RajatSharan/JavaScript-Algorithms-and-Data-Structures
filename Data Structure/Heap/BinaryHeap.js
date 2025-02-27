class MaxBinaryHeap{

    constructor() {
        this.heap = [];
    }

    insert(value) {
        // Step 1: Add the new value at the end
        this.heap.push(value);
        // Step 2: Heapify Up (Bubble Up)
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            // Swap the child and parent
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            // Move up
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    display() {
        console.log(this.heap);
    }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2);
maxHeap.insert(15);
maxHeap.display();  // Output: [20, 15, 10, 2, 5]
