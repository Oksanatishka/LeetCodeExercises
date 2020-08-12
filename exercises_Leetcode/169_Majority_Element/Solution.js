/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var countMax = 0;
    var count = 0;
    var answer;
    for (var i = 0; i < nums.length; i++) {
        var elem = nums[i];
        count = 1;
        for (var k = i + 1; k < nums.length; k++) {
            if (nums[k] == elem) {
                count++;
            }
        }
        if (count > countMax) {
            countMax = count;
            answer = nums[i];
        }
    }
    return answer;
};

console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2
