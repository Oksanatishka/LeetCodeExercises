/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// rightRotate
// https://www.geeksforgeeks.org/array-rotation/ (METHOD 2 (Rotate one by one))
var rotate = function(nums, k) {
    for (var i = 0; i < k; i++) {
        var temp = nums[nums.length - 1];
        var j;
        for (j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[j] = temp;
    }
    return nums;
};

// Time complexity : O(n * d)
// Auxiliary Space : O(1)

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); //[3,99,-1,-100]

// var leftRotate = function(nums, d) {
//     for (var i = 0; i < d; i++) {
//         var temp = nums[0];
//         var j;
//         for (j = 0; j < nums.length - 1; j++) {
//             nums[j] = nums[j + 1];
//         }
//         nums[j] = temp;
//     }
//     return nums;
// };

// var rightRotate = function(nums, d) {
//     for (var i = 0; i < d; i++) {
//         var temp = nums[nums.length - 1];
//         var j;
//         for (j = nums.length - 1; j > 0; j--) {
//             nums[j] = nums[j - 1];
//         }
//         nums[j] = temp;
//     }
//     return nums;
// };
