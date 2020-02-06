// Given a phrase, reverse the order of the characters of each word.

function reverseWords(str) {
    let arr = str.split(' ');
    let result = [];

    for (let word in arr) {
        let reversed = arr[word]
            .split('')
            .reverse()
            .join('');

        result.push(reversed);
    }
    return result.join(' ');
}
console.log(reverseWords('I love JavaScript!')); //"I evol !tpircSavaJ"

// time complexity: linear
// space complexity is linear.

// In Big-O notation:
// Constant: O(1)
// Logarithmic: O(log n)
// Linear: O(n)
// Linearithmic: O(n log n)
// Quadratic: O(n²)
// Expontential: O(2^n)
// Factorial: O(n!)
