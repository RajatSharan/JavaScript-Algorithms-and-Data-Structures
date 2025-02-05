function getMaxLengthWordCharCount(words) {
    // Find the longest words (if multiple have the same length)
    let maxLength = Math.max(...words.map(word => word.length));
    let longestWords = words.filter(word => word.length === maxLength);
    
    // Choose the first longest word
    let longestWord = longestWords[0];
    
    // Count occurrences of each character
    let charCount = {};
    for (let char of longestWord) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    return { longestWord, charCount };
}

// Test case
let wordsArray = ["test", "abc", "Interview", "Playwrite", "Cypress"];
let result = getMaxLengthWordCharCount(wordsArray);

console.log("Longest Word:", result.longestWord);
console.log("Character Count:", result.charCount);
