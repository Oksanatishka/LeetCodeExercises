// This algorithm is the easiest to understand but is also the most inefficient.
// quadratic time and constant space.

const bubbleSort = (array) => {
    let swapped;
    do {
        swapped = false;
        array.forEach((number, index) => {
            if (number > array[index + 1]) {
                [array[index], array[index + 1]] = [array[index + 1], array[index]];
                swapped = true;
            }
        });
    } while (swapped);
    return array;
};
// ------------------------------------------------------------------------
function _bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const less = array[j + 1];
                array[j + 1] = array[j];
                array[j] = less;
            }
        }
    }

    return array;
}
console.log(bubbleSort([5, 4, 3, 2, 1])); //[1, 2, 3, 4, 5]);
console.log(bubbleSort([5, 3, 1, 2, 4])); //[1, 2, 3, 4, 5]);
console.log(_bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]);
console.log(_bubbleSort([5, 3, 1, 2, 4])); // [1, 2, 3, 4, 5]);
// ------------------------------------------------------------------------
function bubble(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            const current = arr[j]; // текущий элемент
            const next = arr[j + 1]; // следующий

            // если текущий больше следующего, меняем их местами
            if (current > next) {
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }

    return arr;
}

// O(n^2)-сложность
// расход памяти - идеально
