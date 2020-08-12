/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var maxNum = Number.MIN_SAFE_INTEGER;
    var maxNumIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
            maxNumIndex = i;
        }
    }

    halfMax = maxNum / 2;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == maxNum) {
            i++;
        }
        if (nums[i] > halfMax) {
            return -1;
        }
    }
    return maxNumIndex;
};

console.log(dominantIndex([3, 6, 1, 0])); //1
console.log(dominantIndex([1, 2, 3, 4])); //-1
