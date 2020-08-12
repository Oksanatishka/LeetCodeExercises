/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var count = 0;
    var countArr = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            count++;
        } else {
            count++;
            countArr.push(count);
            count = 0;
        }
    }
    // console.log('countarr ', countArr);
    var res = 0;
    for (var i = 0; i < countArr.length; i++) {
        if (countArr[i] > res) {
            res = countArr[i];
        }
    }
    return res;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); //3     [1,3,5]
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); //1     [2]
