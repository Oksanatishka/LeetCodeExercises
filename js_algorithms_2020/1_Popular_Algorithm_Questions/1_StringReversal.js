// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of characters as input, write a function that returns it with the characters reversed.

const str = 'abcd';

function reversedStr(str) {
    return str
        .split('')
        .reverse()
        .join('');
}
function reversedStr1(str) {
    return str.split('').reduce((result, character) => character + result);
}
function reversedStr2(str) {
    let result = '';
    for (let char of str) {
        result = char + result;
        // console.log('result', result);
    }
    return result;
}

console.log(reversedStr(str));
console.log(str);
console.log(reversedStr('Hello World!'));

console.log(reversedStr1(str));
console.log(reversedStr1('Hello World!'));

console.log(reversedStr2(str));
console.log(reversedStr2('Hello World!'));

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
