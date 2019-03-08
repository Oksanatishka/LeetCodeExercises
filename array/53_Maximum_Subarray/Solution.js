/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var subarr = [];
    var maxSumSubarr = Number.MIN_SAFE_INTEGER;
    if (nums.length == 1) {
        return nums[0];
    }
    for (var i = 0; i < nums.length; i++) {
        subarr = [nums[i]];
        sumSubarr = nums[i];
        if (sumSubarr > maxSumSubarr) {
            maxSumSubarr = sumSubarr;
            // console.log('maxSumSubarr', { sumSubarr, maxSumSubarr });
        }
        for (var j = i + 1; j < nums.length; j++) {
            subarr.push(nums[j]);
            sumSubarr = sumSubarr + nums[j];
            if (sumSubarr > maxSumSubarr) {
                maxSumSubarr = sumSubarr;
                // console.log('maxSumSubarr', { sumSubarr, maxSumSubarr });
            }
        }
    }
    return maxSumSubarr;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6    ([4,-1,2,1])
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-2, 1])); // 1
