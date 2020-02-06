// This algorithm requires quadratic time and logarithmic space such that in practice is often the fastest.
// As such, most programming languages natively implement this algorithm for sorting.

const quickSort = array => {
    if (array.length < 2) return array;

    const pivot = array[array.length - 1];
    const left = [],
        right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) left.push(array[i]);
        else right.push(array[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};
