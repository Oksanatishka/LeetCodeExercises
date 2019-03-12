/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    // console.log(nums);
    var res = 0;
    if (nums[0] != 0) {
        res = 0;
        return res;
    }
    if (nums[0] == 0 && nums[1] != 1) {
        res = 1;
        return res;
    }
    if (nums[0] == 0 && nums[1] == 1 && nums[2] != 2) {
        res = 2;
        return res;
    }
    if (nums[0] == 0 && nums[1] == 1 && nums[2] == 2 && nums[3] != 3) {
        res = 3;
        return res;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] + 1 != nums[i + 1]) {
            res = nums[i] + 1;
            return res;
        }
    }
    // return res;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([1])); // 0
console.log(missingNumber([0])); // 1
console.log(missingNumber([1, 2])); // 0
console.log(missingNumber([0, 1, 2])); // 3
// console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14])); // 18
// console.log(missingNumber([3,19,22,43,24,2,12,32,30,45,21,23,42,31,37,14,25,8,13,20,5,40,41,18,17,47,15,10,33,34,0,44,11,6,48,7,35,27,4,26,39,38,1,16,36,28,9,46,29]))  // 49
