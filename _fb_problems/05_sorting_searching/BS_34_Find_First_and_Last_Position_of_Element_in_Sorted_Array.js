/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [find(nums, target), find(nums, target, false)];
};

function find(nums, target, findMin = true) {
    let min = 0;
    let max = nums.length - 1;

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);

        if (nums[mid] > target) {
            max = mid - 1;
        } else if (nums[mid] < target) {
            min = mid + 1;
        } else {
            if (findMin) {
                if (nums[mid - 1] == target) max = mid - 1;
                else return mid;
            } else {
                if (nums[mid + 1] == target) min = mid + 1;
                else return mid;
            }
        }
    }

    return -1;
}
