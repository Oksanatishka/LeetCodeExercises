/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var res = 0;
    // var isCanBePlaced = false
    for (var i = 0; i < flowerbed.length; i++) {
        // console.log('first elem ', flowerbed[i - 1]);
        // console.log('elem ', flowerbed[i]);
        // console.log('next elem ', flowerbed[i + 1]);
        if (
            flowerbed[i] == 0 &&
            (flowerbed[i + 1] == 0 || flowerbed[i + 1] == undefined) &&
            (flowerbed[i - 1] == 0 || flowerbed[i - 1] == undefined)
        ) {
            res++;
            i++;
        }
    }
    // console.log('final res ', res);
    if (res >= n) {
        return true;
    } else {
        return false;
    }
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); //true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); //false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); //true
console.log(canPlaceFlowers([0, 1, 0, 1, 0, 1, 0, 0], 1)); //true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); //false
