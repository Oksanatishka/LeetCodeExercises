// https://leetcode.com/problems/two-sum/ (1)

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function solution(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                break;
            }
        }
        // to consider the result [0,1,4,5] and make it [0,1]
        if (result.length != 0) {
            break;
        }
    }
    return result;
}
test('good', () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(solution([2, 7, 11, 15, 4, 5], 9)).toEqual([0, 1]);
});
