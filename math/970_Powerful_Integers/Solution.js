/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var i = 0;

    var arr = [];
    var valueX = 0;

    if (bound == 0 || bound == 1) {
        return arr;
    }

    if (x == 1 && y == 1) {
        arr.push(2);
        return arr;
    }
    if (x == 1 && y == 1) {
        arr.push(2);
        return arr;
    }
    if (x == 1) {
        var k = 0;
        var result = 0;
        while (result <= bound) {
            result = Math.pow(y, k) + 1;
            if (result <= bound) {
                arr.push(result);
            }
            k++;
        }
    }

    if (y == 1) {
        var k = 0;
        var result = 0;
        while (result <= bound) {
            result = Math.pow(x, k) + 1;
            if (result <= bound) {
                arr.push(result);
            }
            k++;
        }
    }

    while (i >= 0 && valueX < bound && x > 1 && y > 1) {
        valueX = Math.pow(x, i);
        var j = 0;
        var valueY = 0;
        while (j >= 0 && valueY < bound) {
            valueY = Math.pow(y, j);
            if (valueX + valueY <= bound) {
                var result = valueX + valueY;
                arr.push(result);
            }
            j++;
        }
        i++;
    }

    // to remove duplicates
    var l = 0;
    while (l < arr.length) {
        var h = l + 1;
        while (h < arr.length) {
            if (arr[l] == arr[h]) {
                arr.splice(h, 1);
            }
            h++;
        }
        l++;
    }
    return arr;
};

console.log(powerfulIntegers(2, 3, 10)); // [2,3,4,5,7,9,10]
console.log(powerfulIntegers(3, 5, 15)); // [2,4,6,8,10,14]
console.log(powerfulIntegers(2, 1, 10)); // [2,3,5,9]
console.log(powerfulIntegers(1, 1, 2)); //  [2]
console.log(powerfulIntegers(1, 1, 0)); //  []
console.log(powerfulIntegers(1, 1, 1)); //  []
