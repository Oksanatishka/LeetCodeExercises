// Exercises:
// 01. maximum streak       - double loop
// 02. city attractions     - graphs
// 03. work schedule        - backtraking
// 04. reconstructing arrays

// const f = (m, data) => {
function maxStreak(m, data) {
    var result = 0;
    var maxResult = -1;
    for (var i = 0; i < data.length; i++) {
        var c = true;
        for (var j = 0; j < m; j++) {
            if (data[i][j] === 'N') {
                c = false;
                break;
            }
        }
        if (c) {
            result++;
        } else {
            result = 0;
        }
        if (result > maxResult) {
            maxResult = result;
        }
    }

    return maxResult;
}

// it('', () => {
//     expect(f(2, ['YN', 'NN'])).toEqual(0);
//     expect(f(3, ['NYY'])).toEqual(0);
//     expect(f(4, ['YNYY', 'YYYY', 'YYYY', 'YYNY', 'NYYN'])).toEqual(2);
//     expect(f(4, ['YNYY', 'YYYY', 'YYYY', 'YYNY', 'YYYY', 'YYYY', 'YYYY', 'NYYN'])).toEqual(3);
// });

console.log(maxStreak(3, ['NYY'])); // 0
console.log(maxStreak(4, ['YNYY', 'YYYY', 'YYYY', 'YYNY', 'NYYN'])); // 2
