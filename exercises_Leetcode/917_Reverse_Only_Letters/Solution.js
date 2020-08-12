/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var letter = function(s) {
        return (
            (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122) ||
            (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90)
        );
    };

    const chars = S.split(''); // [ 'a', 'b', '-', 'c', 'd' ]
    // console.log('chars ', chars);
    const output = chars.filter(letter).reverse(); // [ 'd', 'c', 'b', 'a' ]
    // console.log('output ', output);
    chars.forEach((s, i) => {
        // console.log('s ', s);   // a b - c d
        // console.log('i ', i);   // 0 1 2 3 4
        if (!letter(s)) {
            // console.log('output ', output);      // [ 'd', 'c', 'b', 'a' ]
            // splice(start, deleteCount, item)
            output.splice(i, 0, s); // [ 'd', 'c', '-', 'b', 'a' ]
            // console.log('output ', output);
        }
    });
    return output.join(''); // dc-ba
};

console.log(reverseOnlyLetters('ab-cd')); // "dc-ba"
console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); // "Qedo1ct-eeLg=ntse-T!"
