/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();
    if (s === '') return 0;
    // console.log(s.split(' '));
    return s.split(' ').filter(c => c != '').length;
};

console.log(countSegments('Hello, my name is John')); // 5
console.log(countSegments('')); // 0
console.log(countSegments('                ')); // 0
console.log(countSegments(', , , ,        a, eaefa')); // 6
