/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let grouped = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let key = word
            .split('')
            .sort()
            .join('');
        // console.log('word ', word);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(word);
    }
    return Object.values(grouped);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["ate","eat","tea"],["nat","tan"],["bat"]]
