/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var res = false;
    for (var i = 0; i < nums.length; i++) {
        var elem = nums[i];
        for (var k = i + 1; k < nums.length; k++) {
            if (elem == nums[k]) {
                res = true;
            }
        }
    }
    return res;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
