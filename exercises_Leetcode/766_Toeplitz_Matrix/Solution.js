/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // for (var i = 0; i < matrix.length; i++) {
    //     for (var k = 0; k < matrix[i].length; k++) {
    //         console.log('matrix[i][k] ', matrix[i][k]);
    //         console.log('matrix[i + 1][k + 1] ', matrix[i + 1][k + 1]);
    //         var count = 1;
    //         while (count < matrix.length) {
    //             if (matrix[i][k] != matrix[i + count][k + count]) {
    //                 count++;
    //             } else if (matrix[i + count][k + count] == undefined) {
    //                 break;
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }
    // }
    // return true;
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])); //true
console.log(isToeplitzMatrix([[1, 2], [2, 2]])); //false
