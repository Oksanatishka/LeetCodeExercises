/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var res = false;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < i + 1 + k; j++) {
            if (nums[i] == nums[j]) {
                res = true;
            }
        }
    }
    return res;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); //true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //false
