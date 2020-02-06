// Given a number as an input, print out every integer from 1 to that number. However,
// when the integer is divisible by 2, print out “Fizz”;
// when it’s divisible by 3, print out “Buzz”;
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num) {
    let output = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            // console.log(i, 'Fizz Buzz');
            output.push('Fizz Buzz');
        } else if (i % 2 === 0) {
            // console.log(i, 'Fizz');
            output.push('Fizz');
        } else if (i % 3 === 0) {
            // console.log(i, 'Buzz');
            output.push('Buzz');
        } else {
            // console.log(i);
            output.push(i);
        }
    }
    return output;
}

console.log(fizzBuzz(12));

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
