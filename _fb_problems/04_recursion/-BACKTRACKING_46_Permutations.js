// it's going to be a backtracking question where
// we're going to try every possible possibility and once we run out of possibilities
// we just try a different - maybe number in the front or something like that
// - so we want to initialize a temporary       // let temp = []
// - we want to set the results over here       // let results = []

// the basic format for any backtrack function is always
//      - take the temp which will be updating
//      - and usually another one which could be something like the index that we're at or in this case we're just going to call nums
// so we're going to have an 'if condition' and we're also going to have a 'for loop' to basically create all of our permutations or combinations
// since we want to never go over three values in the temps we want to pop out the value last value of the temp

// temp = []       -> [1]   -> [1,2] -> [1,2,3]
// nums = [1,2,3]  -> [2,3] -> [3]   -> []

// O(n!) where n is the number of values in nums // if Input: [1,2,3] then 3! = 6 permutations

var permute = function (nums) {
    let temp = [];
    let result = [];

    function backtrack(temp, nums) {
        if (nums.length === 0) {
            result.push([...temp]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            temp.push(nums[i]);
            nums.splice(i, 1); // Remove 1 element at index i
            backtrack(temp, nums);
            nums.splice(i, 0, temp.pop()); // inserts at index i
        }
    }
    backtrack(temp, nums);
    return result;
};

console.log(permute([1, 2, 3])); // [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

//-------------------------------------------------------------
// var permute = function (nums) {
//     const res = [];
//     backtrack(nums, res);
//     return res;
// };

// function backtrack(nums, res, n = 0) {
//     if (n === nums.length - 1) {
//         res.push(nums.slice(0));
//         return;
//     }
//     for (let i = n; i < nums.length; i++) {
//         [nums[i], nums[n]] = [nums[n], nums[i]];
//         backtrack(nums, res, n + 1);
//         [nums[i], nums[n]] = [nums[n], nums[i]];
//     }
// }
//-------------------------------------------------------------
// https://initjs.org/all-permutations-of-a-set-f1be174c79f8
// function getAllPermutations(nums) {
//     var results = [];

//     if (nums.length === 1) {
//         results.push(nums);
//         return results;
//     }

//     for (var i = 0; i < nums.length; i++) {
//         var firstChar = nums[i];
//         var charsLeft = nums.substring(0, i) + nums.substring(i + 1);
//         var innerPermutations = getAllPermutations(charsLeft);
//         for (var j = 0; j < innerPermutations.length; j++) {
//             results.push(firstChar + innerPermutations[j]);
//         }
//     }
//     return results;
// }
