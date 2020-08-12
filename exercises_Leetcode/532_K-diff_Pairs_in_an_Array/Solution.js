/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b);

    var pairArr = [];
    var count = 0;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] == k) {
                var pair = [nums[j], nums[i]];
                pairArr.push(pair);
                count++;
            }
        }
    }

    // Removing duplicate sub-arrays
    // https://stackoverflow.com/questions/47255382/removing-duplicate-sub-arrays
    var result = pairArr.filter(function(t) {
        var key = t.join('-');
        return this[key] ? false : (this[key] = true);
    }, Object.create(null));
    return result.length;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); //2     (1, 3) and (3, 5)
console.log(findPairs([1, 2, 3, 4, 5], 1)); //4     (1, 2), (2, 3), (3, 4) and (4, 5)
console.log(findPairs([1, 3, 1, 5, 4], 0)); //1     (1, 1)
