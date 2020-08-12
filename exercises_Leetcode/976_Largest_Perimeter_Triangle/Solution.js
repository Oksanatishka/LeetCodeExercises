/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a, b) => a - b);

    for (var i = A.length - 3; i >= 0; i--) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }
    return 0;
};

console.log(largestPerimeter([2, 1, 2])); // 5
console.log(largestPerimeter([1, 2, 1])); // 0
console.log(largestPerimeter([3, 2, 3, 4])); // 10
console.log(largestPerimeter([3, 6, 2, 3])); // 8
console.log(largestPerimeter([1, 2, 2, 4, 18, 8])); // 5
