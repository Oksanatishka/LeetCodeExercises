/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var number = nums[0];
    for (var i = 1; i < nums.length; i++) {
        number = number ^ nums[i];
    }
    return number;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
