var myFunc = function(low, high) {
    if (low == high) {
        return low;
    } else {
        return low + myFunc(low + 1, high);
    }
};

console.log(myFunc(1, 10)); // 55
