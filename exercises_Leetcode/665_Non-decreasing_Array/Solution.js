/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var isAsc = false;
    if (nums.length == 1) {
        return true;
    }
    for (var i = 0; i < nums.length; i++) {
        var temp = nums[i];
        for (var k = 1; k < nums.length + 2; k++) {
            nums[i] = k;
            for (var n = 0; n < nums.length - 1; n++) {
                if (nums[n] <= nums[n + 1]) {
                    isAsc = true;
                } else {
                    isAsc = false;
                    break;
                }
            }
            if (isAsc) {
                return isAsc;
            }
        }
        nums[i] = temp;
    }
    return isAsc;
};

console.log(checkPossibility([4, 2, 3])); // true     modify the first 4 to 1 to get a non-decreasing array
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([4, 3, 2])); // false
console.log(checkPossibility([1])); // true
console.log(checkPossibility([1, 3, 2])); // true
console.log(checkPossibility([1, 1, 1])); // true
