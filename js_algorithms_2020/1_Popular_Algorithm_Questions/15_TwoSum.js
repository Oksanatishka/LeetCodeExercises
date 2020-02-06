// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr, sum) {
    const result = [];
    const store = [];
    for (let part1 of arr) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) {
            result.push([part1, part2]);
        }
        store.push(part1);
    }
    return result;
}

console.log(twoSum([1, 2, 2, 3, 4], 4)); // [[2, 2], [3, 1]]

// linear time complexity.
