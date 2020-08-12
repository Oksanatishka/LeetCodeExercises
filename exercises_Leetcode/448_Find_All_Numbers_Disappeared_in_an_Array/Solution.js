/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a, b) => a - b);
    var res = [];
    var count = 1;
    while (count <= nums.length) {
        var i = 0;
        while (i < nums.length) {
            if (count == nums[i]) {
                count++;
            }
            i++;
        }
        if (count != nums[i] && count <= nums.length) {
            res.push(count);
            count++;
        }
    }
    return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
