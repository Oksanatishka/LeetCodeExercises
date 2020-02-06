// Given a phrase, capitalize every word.

function cap(str) {
    let arr = [];
    str.split(' ').forEach(element => {
        arr.push(element[0].toUpperCase() + element.slice(1));
    });
    return arr.join(' ');
}

console.log(cap('hello world')); //"Hello World"

// linear time complexity
// linear space complexity

// In Big-O notation:
// Constant: O(1)
// Logarithmic: O(log n)
// Linear: O(n)
// Linearithmic: O(n log n)
// Quadratic: O(n²)
// Expontential: O(2^n)
// Factorial: O(n!)
