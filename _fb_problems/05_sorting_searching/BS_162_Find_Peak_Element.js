/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let max = Math.max(...nums);
    // console.log(max)
    return nums.indexOf(max);
};

// Recursive Binary Search. O(logn)
var findPeakElement = function (nums, l = 0, r = nums.length - 1) {
    if (l === r) return l;
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) return findPeakElement(nums, l, mid);
    else return findPeakElement(nums, mid + 1, r);
};

// Iterative Binary Search. O(logn)
var findPeakElement = function (nums) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        if (l === r) return l;
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid + 1]) r = mid;
        else l = mid + 1;
    }
};
