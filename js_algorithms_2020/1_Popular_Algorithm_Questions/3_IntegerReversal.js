// Given an integer, reverse the order of the digits.

let myInt = 1234;

function reverseInt(num) {
    // return ('' + num)
    return parseInt(
        num
            .toString()
            .split('')
            .reverse()
            .join('')
    );
}

console.log(reverseInt(myInt));

// number to string: ''+number

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
