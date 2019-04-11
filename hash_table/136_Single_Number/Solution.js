/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution Approach: Bit Manipulation

// var singleNumber = function(nums) {
// var single = 0;
// for (var i = 0, l = nums.length; i < l; i++) {
//     single ^= nums[i];
//     console.log('single ', single);
// }
// return single;
// };

// Solution Approach: brute force ??

// var singleNumber = function(nums) {
// nums.sort();
// for (var i = nums.length - 1; i > 0; i--) {
//     if (nums[i] == nums[i - 1]) {
//         nums.splice(i - 1, 2);
//         // console.log(nums);
//         // i--;
//     }
// }
// return nums;
// };

// Solution Approach: Hash Table

var singleNumber = function(nums) {
    var hashTable = {};

    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];

        if (hashTable[value]) {
            hashTable[value] = hashTable[value] + 1;
        } else {
            hashTable[value] = 1;
        }
    }
    console.log(hashTable);
    var result = Object.keys(hashTable).find(key => hashTable[key] === 1);
    return result;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
