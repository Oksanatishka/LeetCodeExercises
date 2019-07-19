/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // ^        Matches beginning of input.
    // *        Matches the preceding expression 0 or more times.
    // (x)      Matches 'x' and remembers the match, as the following example shows.
    // []       Character set. This pattern type matches any one of the characters in the brackets.
    // {n,m}    Where n and m are positive integers and n <= m. Matches at least n and at most m occurrences of the preceding expression. When m is omitted, it's treated as ∞.
    // +        Matches the preceding expression 1 or more times.
    const match = str.match(/^ *([+-]{0,1}[0-9]+)/);
    // console.log('match[1] ', match[1]);
    // console.log('match ', match);
    return match ? Math.min(Math.pow(2, 31) - 1, Math.max(-Math.pow(2, 31), match[1])) : 0;
};

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); //   0
console.log(myAtoi('-91283472332')); // -2147483648    The number "-91283472332" is out of the range of a 32-bit signed integer.
console.log(myAtoi('')); // 0
console.log(myAtoi('-')); // 0
console.log(myAtoi('+')); // 0
console.log(myAtoi('3.14159')); // 3
console.log(myAtoi('.1')); // 0
