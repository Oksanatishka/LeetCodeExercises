/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let logsArr = logs.map(l => l.split(' '));
    // console.log('logsArr ', logsArr, '\n');
    let numbers = '1234567890'.split('');
    // console.log('numbers ', numbers, '\n');
    let letters = logsArr.filter(l => !numbers.includes(l[1][0]));
    // console.log('letters ', letters, '\n');
    let digits = logsArr.filter(l => numbers.includes(l[1][0]));
    // console.log('digits ', digits, '\n');

    // 1. map() - to join all words except the first one in each element of array
    // 2. sort() - to sort the 2nd string in each element of array
    letters = letters
        .map(l => {
            let [lead, ...others] = l;
            return [lead, others.join(' ')];
        })
        .sort((a, b) => {
            if (a[1] < b[1]) {
                return -1;
            }
            if (a[1] >= b[1]) {
                return 1;
            } //keep head order
            return 0;
        });
    // console.log('letters ', letters, '\n');

    // join all elements of letters array + add at the end joint digit elements
    return [...letters.map(l => l.join(' ')), ...digits.map(l => l.join(' '))];
};

console.log(
    reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'])
); // ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
