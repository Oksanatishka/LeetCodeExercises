var myFunc = function(low, high) {
    var even = [];
    var odd = [];
    if (low > high) {
        return;
    }
    console.log(low);
    myFunc(low + 2, high);
};

console.log(myFunc(1, 10)); // even: 2, 4, 6, 8, 10, odd: 1, 3, 5, 7, 9
