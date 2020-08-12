/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    var minVal = 0;
    for (var i = 0; i < nums.length; i += 2) {
        minVal += Math.min(nums[i], nums[i + 1]);
    }
    return minVal;
};

console.log(arrayPairSum([1, 4, 3, 2])); // 4    = min(1, 2) + min(3, 4)
