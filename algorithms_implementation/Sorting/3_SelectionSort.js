// This algorithm also requires quadratic time and constant space.

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < array.length; j++) if (array[j] < array[indexOfMin]) indexOfMin = j;

        if (indexOfMin !== i) {
            let less = array[indexOfMin];
            array[indexOfMin] = array[i];
            array[i] = less;
        }
    }

    return array;
}
