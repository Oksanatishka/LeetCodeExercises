/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let map = {};

    //Find character map for first word
    A[0].split('').forEach(character => {
        map[character] = (map[character] || 0) + 1;
    });

    //find character map for the rest of the words in A
    for (let i = 1; i < A.length; i++) {
        const newMap = {};
        A[i].split('').forEach(character => {
            if (map[character]) newMap[character] = (newMap[character] || 0) + 1;
        });

        //form result from newMap
        for (let n in newMap) {
            if (map[n]) {
                newMap[n] = newMap[n] <= map[n] ? newMap[n] : map[n];
            }
        }
        map = newMap; //update recent counts
    }

    //result = newMap
    const result = [];
    for (let m in map) {
        if (map[m] > 1) {
            for (let i = 1; i < map[m]; i++) {
                result.push(m);
            }
        }
        result.push(m);
    }

    return result;
};

console.log(commonChars(['bella', 'label', 'roller'])); //  ["e","l","l"]
console.log(commonChars(['cool', 'lock', 'cook'])); //  ["c","o"]
