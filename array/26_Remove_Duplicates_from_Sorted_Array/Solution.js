/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            while (nums[i] == nums[j]) {
                var removed = nums.splice(j, 1);
            }
        }
    }
    return nums;
};

console.log(removeDuplicates([1, 1])); // 1
console.log('-----------');
console.log(removeDuplicates([1, 1, 2])); // 2
console.log('-----------');
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
