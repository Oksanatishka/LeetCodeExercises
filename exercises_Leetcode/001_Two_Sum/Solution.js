/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    var sums = [];
    var hashTable = {};

    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];

        if (hashTable[diff] !== undefined) {
            sums.push([hashTable[diff], i]);
            return sums;
        }
        // console.log('sums ', sums);

        hashTable[nums[i]] = i; // add the current number to the hash table
        // console.log('hashTable1 ', hashTable);
    }

    // return all pairs of integers that sum to target
};

// console.log(twoSum([1, 2, 3], 3)); // [0,1]
console.log(twoSum([1, 2, 2, 3, 4, 5], 4)); // [0,3]
// console.log(twoSum([1, 2, 4], 7)); // [0,0]
// console.log(twoSum([2, 5, 5, 11], 10)); // [1,2]

//-----------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1: Brute Force.
// Time complexity : O(n^2).

// var twoSum = function(nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         for (j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// Solution 2: Hash Table.
// Time complexity : O(n).

// https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/
// https://coderbyte.com/algorithm/two-sum-problem
// https://stackoverflow.com/questions/40669179/solving-the-2-sum-algorithm-in-javascript
var twoSum = function (nums, target) {
    // Create the hashmap
    var hashTable = {};
    nums.forEach(function (value, index) {
        hashTable[value] = index;
    });

    for (var i = 0; i < nums.length; i++) {
        if (hashTable[target - nums[i]]) {
            console.log([nums[hashTable[target - nums[i]]], nums[i]]);
        }
    }
};
console.log(twoSum([1, 2, 3], 3)); // [0,1]
console.log(twoSum([1, 2, 2, 3, 4, 5], 4)); // [0,3]
console.log(twoSum([1, 2, 4], 7)); // [0,0]
console.log(twoSum([2, 5, 5, 11], 10)); // [1,2]
