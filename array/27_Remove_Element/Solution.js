/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (i = 0; i <= nums.length; i++) {
        // console.log('num' + nums[i]);
        // console.log('val' + val);
        while (nums[i] == val) {
            nums.splice(i, 1);
            console.log('nums ' + nums);
        }
    }
    return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log('--------');
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
