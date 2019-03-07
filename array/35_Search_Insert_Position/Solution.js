/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    arrLength = nums.length;
    if (target > nums[arrLength - 1]) {
        return arrLength;
    }
    for (i = 0; i < arrLength; i++) {
        if (nums[i] == target) {
            return i;
        } else if (nums[i] > target && nums[i - 1] < target) {
            return i;
        } else if (target < nums[i]) {
            return i;
        }
    }
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([2, 5], 1)); // 0
