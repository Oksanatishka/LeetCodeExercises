/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Approach 1: Brute Force
// - consider every possible subarray of size greater than or equal to 2,
// - find out its sum by iterating over the elements of the subarray, and then we
// - check if the sum obtained is an integer multiple of the given k.

// Time complexity : O(n^3). Three for loops iterating over the array are used.
// Space complexity : O(1). Constant extra space is used.

var checkSubarraySum = function (nums, k) {
    for (let start = 0; start < nums.length - 1; start++) {
        for (let end = start + 1; end < nums.length; end++) {
            let sum = 0;
            for (let i = start; i <= end; i++) sum += nums[i];
            if (sum == k || (k != 0 && sum % k == 0)) return true;
        }
    }
    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); //true  - Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)); // true - Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

// Approach 2: Better Brute Force

// Time complexity : O(n^2). Two for loops are used for considering every subarray possible.
// Space complexity : O(n). sum array of size nn is used.

// var checkSubarraySum_2 = function (nums, k) {
//     let sum = [];
//     sum[0] = nums[0];
//     for (let i = 1; i < nums.length; i++) sum[i] = sum[i - 1] + nums[i];
//     for (let start = 0; start < nums.length - 1; start++) {
//         for (let end = start + 1; end < nums.length; end++) {
//             let summ = sum[end] - sum[start] + nums[start];
//             if (summ == k || (k != 0 && summ % k == 0)) return true;
//         }
//     }
//     return false;
// };

// console.log(checkSubarraySum_2([23, 2, 4, 6, 7], 6));
// console.log(checkSubarraySum_2([23, 2, 6, 4, 7], 6));

// Approach 3: Using HashMap

// Time complexity : O(n). Only one traversal of the array numsnums is done.
// Space complexity : O(min(n,k)). The HashMap can contain upto min(n,k) different pairings.

var checkSubarraySum_3 = function (nums, k) {
    let sum = 0;
    let hashMap = {};
    hashMap[0] = -1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (k != 0) sum = sum % k;
        if (hashMap[sum]) {
            if (i - hashMap[sum] > 1) return true;
        } else hashMap[sum] = i;
    }
    return false;
};
console.log(checkSubarraySum_3([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum_3([23, 2, 6, 4, 7], 6));
