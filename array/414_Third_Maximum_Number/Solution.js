/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b);
    var maxNum = Number.MIN_SAFE_INTEGER;
    var secondMaxNum = maxNum;
    var thirdMaxNum = maxNum;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }

    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] != nums[i]) {
            secondMaxNum = nums[i - 1];

            if (i > 1) {
                while (i - 1 > 0) {
                    var j = i - 1;
                    if (nums[j - 1] != secondMaxNum) {
                        thirdMaxNum = nums[j - 1];

                        return thirdMaxNum;
                    }
                    i--;
                }
            } else {
                return maxNum;
            }
        }
    }
    return maxNum;
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2
console.log(thirdMax([1, 2, -2147483648])); // -2147483648
console.log(thirdMax([1, 1, 2])); // 2
