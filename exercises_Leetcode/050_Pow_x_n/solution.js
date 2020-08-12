// Approach: Recursive

// Write a C program to input a number from user and find power of given number using recursion.

var myFunc = function (num, power) {
    if (power == 0) {
        return 1;
    } else if (power > 0) {
        return num * myFunc(num, power - 1);
    } else {
        return 1 / myFunc(num, -power);
    }
};

console.log(myFunc(5, 2)); // 25
