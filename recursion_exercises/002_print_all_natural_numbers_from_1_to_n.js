var myFunc = function(low, high) {
    if (low > high) {
        return;
    }
    console.log(low);
    myFunc(low + 1, high);
};
console.log(myFunc(1, 10)); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
