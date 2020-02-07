// Given an array and a size, split the array items into a list of arrays of the given size.

function arrChunking(arr, size) {
    let newArr = [];
    // !!! not i++
    for (let i = 0; i < arr.length; i += size) {
        let sliced = size >= arr.length ? arr.slice(i) : arr.slice(i, i + size);
        newArr.push(sliced);
    }
    return newArr;
}

console.log(arrChunking([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]);
console.log(arrChunking([1, 2, 3, 4], 3)); // [[1, 2, 3], [4]]);
console.log(arrChunking([1, 2, 3, 4], 5)); // [[1, 2, 3, 4]]);

// time complexity: linear
// space complexity is linear.

// In Big-O notation:
// Constant: O(1)
// Logarithmic: O(log n)
// Linear: O(n)
// Linearithmic: O(n log n)
// Quadratic: O(n²)
// Expontential: O(2^n)
// Factorial: O(n!)
