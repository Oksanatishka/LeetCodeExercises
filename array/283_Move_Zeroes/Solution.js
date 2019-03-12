/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.push(0);
            nums.splice(i, 1);
        }
        if (nums[i - 1] == 0) {
            nums.push(0);
            nums.splice(i - 1, 1);
        }
        if (nums[i - 2] == 0) {
            nums.push(0);
            nums.splice(i - 2, 1);
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
console.log(moveZeroes([0, 0, 1])); //[1,0,0]
console.log(moveZeroes([0, 0, 1])); //[1,0,0]
console.log(moveZeroes([1, 0, 0, 1])); //[1,1,0,0]
