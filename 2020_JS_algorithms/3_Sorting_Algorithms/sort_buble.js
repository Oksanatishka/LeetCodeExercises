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
