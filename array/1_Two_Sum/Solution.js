/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([1, 2, 3], 3)); // [0,1]
console.log(twoSum([1, 2, 2, 3, 4, 5], 4)); // [0,3]
console.log(twoSum([1, 2, 4], 7)); // [0,0]
console.log(twoSum([2, 5, 5, 11], 10)); // [1,2]
