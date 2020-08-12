/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    // F(0) = 0,   F(1) = 1
    // F(N) = F(N - 1) + F(N - 2), for N > 1.
    // N <= 30

    if (N == 0) {
        return 0;
    } else if (N == 1) {
        return 1;
    }

    return fib(N - 1) + fib(N - 2);
};

console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
