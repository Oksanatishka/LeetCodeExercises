/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // var maxAverage = 0;
    var maxAverage = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        var allElemFromSubarr = 0;
        for (var j = i; j < i + k; j++) {
            allElemFromSubarr += nums[j];
        }
        if (allElemFromSubarr / k > maxAverage) {
            maxAverage = allElemFromSubarr / k;
        }
    }
    return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //12.75     (12-5-6+50)/4 = 51/4 = 12.75
console.log(findMaxAverage([-1], 1)); //-1.0
