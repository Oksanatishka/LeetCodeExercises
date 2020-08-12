// Though one of the most efficient, this algorithm can be challenging to understand.
// This algorithm takes linearithmic time and linear space.

const mergeSort = (array) => {
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle),
        right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) result.push(left.shift());
        else result.push(right.shift());
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
};
// ------------------------------------------------------------------------
function _mergeSort(array) {
    if (array.length === 1) return array;

    const center = Math.floor(array.length / 2);
    const left = array.slice(0, center);
    const right = array.slice(center);

    return _merge(_mergeSort(left), _mergeSort(right));
}

function _merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) results.push(left.shift());
        else results.push(right.shift());
    }

    return [...results, ...left, ...right];
}
// ------------------------------------------------------------------------
// сложность этой сортировки — O(n * log n), то есть длина массива (надо как минимум раз полностью пройти по
// массиву), умноженная на логарифм от длины (сложность постоянного деления пополам).

// быстрая универсальная сортировка

// сортировка слиянием и быстрая сортировка — это лучшие универсальные сортировки.
// То есть они будут стабильно хорошо работать в любых ситуациях с любыми данными (естественно, в пределах разумного).
// Хотя да, существуют разные сортировки со сложностью лучше, чем O(n * log n): например, radix sort. Но их применение специфично и не является универсальным.

function mergeSort(unsortedArray) {
    // условие выхода из рекурсии
    // если переданный массив имеет менее двух элементов - нечего сортировать
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }

    // находим центр при помощи побитовой операции сдвига на один бит вправо
    // аналог деления на два и округления вниз, только эффективнее и элегантнее
    const middle = unsortedArray.length >> 1;
    const left = unsortedArray.slice(0, middle); // левая часть
    const right = unsortedArray.slice(middle); // правая часть

    // вся магия сортировки в этом методе merge
    return merge(mergeSort(left), mergeSort(right));
}
