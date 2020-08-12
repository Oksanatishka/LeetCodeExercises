/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// P.S. Just swap doesn't solve this problem!!!
// var moveZeroes = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === 0) {
//             let temp = nums[i];
//             nums[i] = nums[i + 1];
//             nums[i + 1] = temp;
//         }
//     }
//     return nums;
// };

// Approach: Two Pointers
var moveZeroes = function (nums) {
    if (nums.length < 2) return nums;

    let i = 0,
        j = 1;

    while (i < j && j < nums.length) {
        if (nums[i] == 0 && nums[j] == 0) {
            j++;
            continue; // выходит из данной итерации и снова проверяет условие в цикле
        } else if (nums[i] === 0 && nums[j] != 0) {
            // let temp = nums[i];
            // nums[i] = nums[j];
            // nums[j] = temp;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        i++;
        j++;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
