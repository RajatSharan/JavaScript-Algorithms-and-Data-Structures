class HashTable {
    constructor(size = 53) { // Default prime number size for better distribution
        this.keyMap = new Array(size);
    }

    // Simple hash function
    _hash(key) {
        let total = 0;                  
        let PRIME = 31; // Prime number helps reduce collisions
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // Set key-value pair in the hash table
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    // Get value by key
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let pair of this.keyMap[index]) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }

    // Remove key-value pair
    remove(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            this.keyMap[index] = this.keyMap[index].filter(pair => pair[0] !== key);
        }
    }

    // Get all keys
    keys() {
        let keysArray = [];
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let pair of bucket) {
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    }

    // Get all values
    values() {
        let valuesArray = new Set(); // Using Set to avoid duplicate values
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let pair of bucket) {
                    valuesArray.add(pair[1]);
                }
            }
        }
        return [...valuesArray];
    }
}

// Example usage
const ht = new HashTable();
ht.set("name", "Rajat");
ht.set("age", 30);
ht.set("location", "India");

console.log(ht.get("name")); // Output: Rajat
console.log(ht.keys());      // Output: [ 'name', 'age', 'location' ]
console.log(ht.values());