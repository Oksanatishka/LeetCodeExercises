/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     var arr = (n + '').split('');
//     // return arr;
//     var i = 0;
//     var sum = 0;
//     var count = 0;
//     while (i < arr.length) {
//         sum += arr[i] * arr[i];
//         i++;
//         count++;
//     }

//     if (sum == 1) {
//         return true;
//     } else {
//         if (count <= 8) {
//             return isHappy(sum);
//         }
//     }
//     return false;
// };

console.log(isHappy(19)); // true
console.log(isHappy(2));
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
