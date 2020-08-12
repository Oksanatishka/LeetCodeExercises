/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Algorithm - Two Pointers     // The two pointers pattern requires the array to be sorted
// 1. For the main function:
//      - Sort the input array nums.
//      - Iterate through the array:
//          - If the current value is greater than zero, break from the loop. Remaining values cannot sum to zero.
//          - If the current value is the same as the one before, skip it.
//          - Otherwise, call twoSumII for the current position i.
// 2. For twoSumII function:
//      - Set the low pointer lo to i + 1, and high pointer hi to the last index.
//      - While low pointer is smaller than high:
//          - If sum of nums[i] + nums[lo] + nums[hi] is less than zero, increment lo.
//          - If sum is greater than zero, decrement hi.
//          - Otherwise, we found a triplet:
//              - Add it to the result res.
//              - Decrement hi and increment lo.
//              - Increment lo while the next value is the same as before to avoid duplicates in the result.
// 3. Return the result res.

var threeSum = function (nums) {
    let output = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        let p1 = i + 1;
        let p2 = nums.length - 1;
        while (p1 < p2) {
            let sum = nums[i] + nums[p1] + nums[p2];
            if (sum === 0) {
                output.push([nums[i], nums[p1], nums[p2]]);
                while (nums[p1] === nums[p1 + 1] && p1 < p2) p1++; // ADD 'while' to avoid duplicates
                p1++;
                while (nums[p2] === nums[p2 - 1] && p1 < p2) p2--; // ADD 'while' to avoid duplicates
                p2--;
            }
            if (sum > 0) {
                p2--;
            }
            if (sum < 0) {
                p1++;
            }
        }
        while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++; // ADD 'while' to avoid duplicates
    }
    return output;
};

// sorted input: -4, -1, -1, 0, 1, 2
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1],[-1, -1, 2]]

var threeSum_1 = function (nums) {
    let output = [];
    nums.sort((a, b) => a - b);
    const twoSum_HT = (nums, target) => {
        let obj = {};

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (diff in obj) {
                return [obj[diff], i];
            }
            obj[nums[i]] = i;
        }
        return [];
    };
    for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
        if (i == 0 || nums[i - 1] != nums[i]) {
            twoSum_HT(nums, 0);
        }
    }

    return output;
};

// sorted input: -4, -1, -1, 0, 1, 2
console.log(threeSum_1([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1],[-1, -1, 2]]

// ---------------------------------------------------------------------------------
// 1. 'Two Sum' problem - '3Sum' problem is a follow-up of 'Two Sum'
// Approach: Two-pass Hash Table
// Time complexity : O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n).
// Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.

var twoSum = function (nums, target) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }
    // console.log('obj', obj); // { '2': 0, '7': 1, '11': 2, '15': 3 }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        // !!! Don't forget: && obj[diff] !== i
        if (diff in obj && obj[diff] !== i) {
            return [i, obj[diff]];
        }
    }
    return [];
};
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// Approach: One-pass Hash Table
// Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.
// Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.

var twoSum_1 = function (nums, target) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in obj) {
            return [obj[diff], i];
        }
        obj[nums[i]] = i;
    }
    return [];
};
// console.log(twoSum_1([2, 7, 11, 15], 9)); // [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
// console.log(twoSum_1([3, 2, 4], 6)); // [1, 2]
