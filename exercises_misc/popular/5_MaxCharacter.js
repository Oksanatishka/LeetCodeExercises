// Given a string of characters, return the character that appears the most often.

const myStr = 'abbccd';
const myStr1 = 'abbgggccd';

function maxChar(str) {
    let answer = [];
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        // if (!obj[str[i]]) {
        //     obj[str[i]] = 1;
        // } else {
        //     obj[str[i]]++;
        // }
        obj[str[i]] = obj[str[i]] + 1 || 1;
    }

    console.log('Object.entries(obj)', Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 2 ], [ 'd', 1 ] ]
    console.log('Object.values(obj)', Object.values(obj)); // [ 1, 2, 2, 1 ]
    let maxValue = Math.max(...Object.values(obj));
    for (let [char, max] of Object.entries(obj)) {
        if (max === maxValue) {
            answer.push(char);
        }
    }

    return answer;
}

console.log(maxChar(myStr));
console.log(maxChar(myStr1));

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
