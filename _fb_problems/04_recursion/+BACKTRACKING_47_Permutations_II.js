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
    return Array.from(new Set(result.map((el) => JSON.stringify(el))), JSON.parse); // CHANGE in compare with #46 problem
};

console.log(permute([1, 2, 3])); // [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
