/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
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
