// https://leetcode.com/problems/majority-element/ (169)

// Given an array of size n, find the majority element. The majority element is the element that
// appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

// Example 2:

// Input: [2,2,1,1,1,2,2,3, 10, 2323323, -233232, 5, 6]
// Output: 2

function solution(n) {
    var majorityElement;
    var map = {};

    for (var i = 0; i < n.length; i++) {
        var element = n[i];
        // numberOfElements
        map[element] = map[element] ? map[element] + 1 : 1;
        // { 2: 2, 1: 3 }
        // console.log({ map, majorityElement, element });
        if (!majorityElement) {
            majorityElement = element;
        } else if (map[majorityElement] < map[element]) {
            majorityElement = element;
            // console.log({ majorityElement });
        }
    }
    return majorityElement;
}

test('good', () => {
    // expect(solution([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
    // expect(solution([3, 2, 3])).toEqual(3);
    expect(solution([1, 2, 2, 3])).toEqual(2);
});
