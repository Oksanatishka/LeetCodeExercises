// const f = (workHours, dayHours, pattern) => {
function findSchedules(workHours, dayHours, pattern) {
    var totalHours = 0;
    var result = [];
    var diff;

    for (var i = 0; i < pattern.length; i++) {
        if (pattern[i] != '?') {
            totalHours += Number(pattern[i]);
        }
    }

    diff = workHours - totalHours;

    // console.log('diff', pattern.split(''));

    findResult(pattern.split(''), 0, diff, dayHours, result);

    return result;
}

function findResult(pattern, index, diff, dayHours, result) {
    // console.log('index', index, pattern.length)
    if (index == pattern.length) {
        if (diff == 0) {
            result.push(pattern.join(''));
            // console.log('result', result);
        }
        return;
    }
    if (pattern[index] == '?') {
        for (var i = 0; i < dayHours + 1; i++) {
            var c = pattern[index];
            // console.log('c', c);
            pattern[index] = String(i);
            // console.log('pattern', pattern);
            findResult(pattern, index + 1, diff - i, dayHours, result);
            pattern[index] = c;
        }
    } else {
        findResult(pattern, index + 1, diff, dayHours, result);
    }
}

// it('', () => {
//     // expect(f(3, 2, '??2??00')).toEqual(['0020100', '0021000', '0120000', '1020000']);
//     expect(f(56, 8, '???8???')).toEqual(['8888888']);
//     // expect(3, 2, '??2??00').toEqual(['0020100', '0021000', '0120000', '1020000']);
// });

console.log(findSchedules(3, 2, '??2??00'));
console.log(findSchedules(56, 8, '???8???'));
console.log(findSchedules(3, 2, '??2??00'));
