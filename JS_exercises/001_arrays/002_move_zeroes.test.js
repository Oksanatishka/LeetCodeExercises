// 283. Move Zeroes https://leetcode.com/problems/move-zeroes/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative
// order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

function solution(nums) {
    var numLen = nums.length;
    for (var i = 0; i < numLen; i++) {
        if (nums[i] === 0) {
            nums.push(0);
            // splice() method changes the contents of an array by removing or
            // replacing existing elements and/or adding new elements.
            nums.splice(i, 1);
        }
    }
    return nums;
}

test('good', () => {
    expect(solution([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(solution([0])).toEqual([0]);
    expect(solution([])).toEqual([]);
});
