/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    // var newArr = [];
    // var rows = 0;
    // var cols = 0;
    // for (var i = 0; i < nums.length; i++) {
    //     for (var j = 0; j < nums[i].length; j++) {
    //         newArr[rows][cols] = nums[i][j];
    //         cols++;
    //         if (cols == c) {
    //             rows++;
    //             cols = 0;
    //         }
    //     }
    // }
    // console.log(newArr);
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // [[1,2,3,4]]      1 * 4 matrix
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)); // [[1,2],[3,4]]    2 * 4 matrix
