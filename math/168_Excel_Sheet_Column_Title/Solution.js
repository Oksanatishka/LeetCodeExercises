/**
 * @param {number} n
 * @return {string}
 */

// String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
//      String.fromCharCode(65);    // A
//      String.fromCharCode(72, 69, 76, 76, 79); // HELLO

// The Math.floor() function returns the largest integer less than or equal to a given number.
//      Math.floor(5.95);       // output: 5
//      Math.floor(-5.05));     // output: -6

// var convertToTitle = function(n) {
//     var result = '';
//     while (n) {
//         var code = String.fromCharCode(((n - 1) % 26) + 'A'.charCodeAt());
//         n = Math.floor((n - 1) / 26);
//         result = code + result;
//     }
//     return result;
// };

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
