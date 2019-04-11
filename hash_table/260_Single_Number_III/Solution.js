/**
 * @param {number[]} nums
 * @return {number[]}
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
    var result = Object.keys(hashTable).filter(key => hashTable[key] == 1);
    return result;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3,5]
