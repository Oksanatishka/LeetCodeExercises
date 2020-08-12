// This “greedy” algorithm also requires quadratic time and constant space.

const insertionSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
        }
    }
    return array;
};
