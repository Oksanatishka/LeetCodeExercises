/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (var i = 0; i < A.length; i++) {
        for (var k = A[i].length - 1; k > 0; k--) {
            // To flip an image horizontally
            A[i].unshift(A[i][k]);
            // A[i][0] = ;
            A[i].pop();
            if (A[i][k] == 1) {
                A[i][k] == 0;
            } else {
                A[i][k] == 1;
            }
            break;
        }
        // console.log(A);
    }
    for (var i = 0; i < A.length; i++) {
        for (var k = 0; k < A[i].length; k++) {
            // To invert an image
            if (A[i][k] == 1) {
                // console.log('Check 1 ', A[i][k]);
                A[i][k] = 0;
            } else if (A[i][k] == 0) {
                // console.log('Check 0 ', A[i][k]);
                A[i][k] = 1;
            }
        }
        // console.log(A);
    }
    return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); //[[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])); //[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
