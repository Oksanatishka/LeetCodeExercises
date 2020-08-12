// Approach 1: Recursion
var myPow = function (x, n) {
    if (n === 0 || x === 1) return 1;
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }
    if (n % 3 === 0) return myPow(x * x * x, n / 3);
    else if (n % 2 === 0) return myPow(x * x, n / 2);
    else return x * myPow(x, --n);
};

// Approach 2: using a while loop
let myPow = function (x, n) {
    if (x === 1 || n === 0) return 1;

    if (n < 0) {
        n = -n;
        x = 1 / x;
    }

    let res = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            res *= x;
            --n;
        }
        x *= x;
        n /= 2;
    }

    return res;
};
