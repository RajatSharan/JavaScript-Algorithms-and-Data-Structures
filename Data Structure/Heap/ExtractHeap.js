class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        // Step 1: Swap root (max) with last element
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();

        // Step 2: Heapify Down
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index) {
        let largest = index;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        // Find the largest among root, left child, and right child
        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        // Swap and continue heapifying if root is not the largest
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
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
console.log("Heap before extraction:", maxHeap.heap);
console.log("Extracted Max:", maxHeap.extractMax());
console.log("Heap after extraction:", maxHeap.heap);
