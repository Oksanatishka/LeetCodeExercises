/**
 * @param {number[]} A
 * @return {string}
 */

// 00:00 - 23:59
// var largestTimeFromDigits = function(A) {
//     var str = '';
//     var num1 = -1;
//     var num2 = -1;
//     var num3 = -1;
//     var num4 = -1;
//     var indexN1 = 0;
//     var indexN2 = 0;
//     var indexN3 = 0;
//     var indexN4 = 0;

//     for (var i = 0; i < A.length; i++) {
//         if (A[i] >= num1 && A[i] < 3) {
//             num1 = A[i];
//             indexN1 = i;
//         }
//     }
//     if (num1 < 0) {
//         return str;
//     }
//     for (var i = 0; i < A.length; i++) {
//         if (num1 != 2 && i != indexN1 && A[i] >= num2 && A[i] <= 9) {
//             num2 = A[i];
//             indexN2 = i;
//         }
//         if (num1 == 2 && i != indexN1 && A[i] >= num2 && A[i] < 4) {
//             num2 = A[i];
//             indexN2 = i;
//         }
//     }
//     if (num2 < 0) {
//         return str;
//     }

//     for (var i = 0; i < A.length; i++) {
//         if (i != indexN1 && i != indexN2 && A[i] >= num3 && A[i] <= 5) {
//             num3 = A[i];
//             indexN3 = i;
//         }
//     }
//     if (num3 < 0) {
//         return str;
//     }

//     for (var i = 0; i < A.length; i++) {
//         if (i != indexN1 && i != indexN2 && i != indexN3) {
//             num4 = A[i];
//             indexN4 = i;
//             break;
//         }
//     }
//     if (num4 < 0) {
//         return str;
//     }

//     str = num1 + '' + num2 + ':' + num3 + '' + num4 + '';
//     return str;
// };

console.log(largestTimeFromDigits([1, 2, 3, 4])); // "23:41"
console.log(largestTimeFromDigits([5, 5, 5, 5])); // ""
console.log(largestTimeFromDigits([0, 0, 0, 0])); // "00:00"
console.log(largestTimeFromDigits([0, 0, 0, 2])); // "20:00"
console.log(largestTimeFromDigits([0, 4, 0, 0])); // "04:00"
console.log(largestTimeFromDigits([4, 1, 0, 0])); // "14:00"
console.log(largestTimeFromDigits([2, 0, 6, 6])); // "06:26"
