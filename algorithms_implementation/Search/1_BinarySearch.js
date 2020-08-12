// logarithmic time and constant space.

const binarySearch = (array, value) => {
    const midIndex = Math.floor(array.length / 2);
    const midValue = array[midIndex];

    if (value === midValue) return true;
    else if (array.length > 1 && value < midValue)
        return binarySearch(array.splice(0, midIndex), value);
    else if (array.length > 1 && value > midValue)
        return binarySearch(array.splice(midIndex + 1, array.length), value);
    else return false;
};

function _binarySearch(nums, target) {
    // see if target appears in nums

    // we think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target, so by -1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we *don't* mean "the last index")
    var floorIndex = -1;
    var ceilingIndex = nums.length;

    // if there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {
        // find the index ~halfway between the floor and ceiling
        // we have to round down, to avoid getting a "half index"
        var distance = ceilingIndex - floorIndex;
        var halfDistance = Math.floor(distance / 2);
        var guessIndex = floorIndex + halfDistance;

        var guessValue = nums[guessIndex];

        if (guessValue === target) {
            return true;
        }

        if (guessValue > target) {
            // target is to the left, so move ceiling to the left
            ceilingIndex = guessIndex;
        } else {
            // target is to the right, so move floor to the right
            floorIndex = guessIndex;
        }
    }

    return false;
}

console.log(binarySearch([1, 2, 3, 4, 5], 0)); // false);
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // true);

console.log(_binarySearch([1, 2, 3, 4, 5], 0)); // false);
console.log(_binarySearch([1, 2, 3, 4, 5, 6], 6)); // true);
