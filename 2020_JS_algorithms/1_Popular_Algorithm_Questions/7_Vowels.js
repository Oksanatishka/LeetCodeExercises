// Given a string of words or phrases, count the number of vowels.

function countVowels(str) {
    const regex = /[aeuioAEIOU]/g; // /[aeuio]/gi;
    let found = str.match(regex);
    // console.log(found);
    return found ? found.length : 0;
}
console.log(countVowels('hello world')); // 3
console.log(countVowels('hll wrld')); // 3

// time complexity: linear
// space complexity is constant.

// In Big-O notation:
// Constant: O(1)
// Logarithmic: O(log n)
// Linear: O(n)
// Linearithmic: O(n log n)
// Quadratic: O(n²)
// Expontential: O(2^n)
// Factorial: O(n!)
