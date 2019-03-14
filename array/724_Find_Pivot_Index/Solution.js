/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sumBefore;
    var sumAfter;
    for (var i = 0; i < nums.length; i++) {
        // sum after
        sumBefore = 0;
        sumAfter = 0;
        for (var j = i + 1; j < nums.length; j++) {
            sumAfter += nums[j];
        }
        // console.log('i=' + i + ' sumAfter ' + sumAfter);

        // sum before
        for (var k = i - 1; k >= 0; k--) {
            sumBefore += nums[k];
        }
        // console.log('i=' + i + ' sumBefore ' + sumBefore);
        //diff
        if (sumAfter == sumBefore) {
            return i;
        }
    }

    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3     (1+7+3) = (5+6)
console.log(pivotIndex([1, 2, 3])); //-1
