// Implement a function that returns the fibonacci number at a given index.
// a fibonacci number is the sum of the previous two

function fibonacci(element) {
    return element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);
}

function _fibonacci(element) {
    const series = [1, 1];

    for (let i = 2; i < element; i++) {
        const a = series[i - 1];
        const b = series[i - 2];
        series.push(a + b);
    }

    return series[element - 1];
}
// 0 1 1 2 3 5 8 13
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

// recursion ->  exponential time and linear space complexity.
// iterative approach  -> linear time and space.
