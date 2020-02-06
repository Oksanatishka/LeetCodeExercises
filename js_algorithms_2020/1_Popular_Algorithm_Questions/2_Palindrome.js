// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

let myStr = 'acbca';

function isPalindrom(str) {
    return (
        str.toLowerCase() ===
        str
            .toLowerCase()
            .split('')
            .reverse()
            .join('')
    );
}
console.log(isPalindrom(myStr));
console.log(isPalindrom('aCbca'));
console.log(isPalindrom('myStr'));

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
