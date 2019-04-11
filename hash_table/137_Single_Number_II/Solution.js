/**
 * @param {number[]} nums
 * @return {number}
 */
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
    // console.log(hashTable);
    var result = Object.keys(hashTable).find(key => hashTable[key] == 1);
    return result;
};

console.log(singleNumber([2, 2, 3, 2])); // 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99
